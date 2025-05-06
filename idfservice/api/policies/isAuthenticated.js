const jwt = require('jsonwebtoken');

module.exports = async function (req, res, proceed) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, sails.config.custom.jwtSecret);

        // Optionally: fetch user to verify existence/role
        const user = await User.findOne({ id: decoded.id });
        if (!user) return res.status(401).json({ error: 'User no longer exists' });

        req.user = user; // attach user to request if needed
        return proceed();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};