const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    register: async function (req, res) {
        try {
            const { username, password, name, lastname, role } = req.body;

            if (!username || !password || !name) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(409).json({ error: 'Username already in use' });
            }

            const newUser = await User.create({
                username,
                password,
                name,
                lastname,
                role
            }).fetch();

            return res.status(201).json({ user: newUser });
        } catch (err) {
            sails.log.error(err);
            return res.status(500).json({ error: 'Server error during registration' });
        }
    },

    login: async function (req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ error: 'Missing username or password' });
            }

            const user = await User.findOne({ username }).populate('role');
            if (!user) return res.status(401).json({ error: 'Invalid username or password' });

            const match = await bcrypt.compare(password, user.password);
            if (!match) return res.status(401).json({ error: 'Invalid username or password' });

            const token = jwt.sign({ id: user.id, role: user.role }, sails.config.custom.jwtSecret, { expiresIn: '1d' });

            req.session.userId = user.id;
            req.session.token = token;
            req.session.loggedInAt = new Date();

            return res.json({ token, user });
        } catch (err) {
            sails.log.error(err);
            return res.status(500).json({ error: 'Server error during login' });
        }
    },

    logout: async function (req, res) {
        req.session.destroy(() => {
            return res.ok({ message: 'Logged out' });
        });
    }
};
