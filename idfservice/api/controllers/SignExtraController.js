module.exports = {
    // Fetch all signExtras
    get: async (req, res) => {
        try {
            const signExtras = await SignExtra.find();
            return res.json(signExtras);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single signExtra by ID
    view: async (req, res) => {
        try {
            const signExtra = await SignExtra.findOne({ id: req.params.id });
            if (!signExtra) {
                return res.notFound('SignExtra not found');
            }
            return res.json(signExtra);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new signExtra
    create: async (req, res) => {
        try {
            // Create the new signExtra
            const signExtra = await SignExtra.create(req.body).fetch();
            return res.status(201).json(signExtra);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing signExtra
    update: async (req, res) => {
        try {
            const signExtra = await SignExtra.updateOne({ id: req.params.id }).set(req.body);
            if (!signExtra) {
                return res.notFound('SignExtra not found');
            }
            return res.json(signExtra);
        } catch (error) {
            return res.serverError(error);
        }
    },
};
