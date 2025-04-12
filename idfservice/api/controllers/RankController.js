module.exports = {
    // Fetch all ranks
    get: async (req, res) => {
        try {
            const ranks = await Rank.find();
            return res.json(ranks);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single rank by ID
    view: async (req, res) => {
        try {
            const rank = await Rank.findOne({ id: req.params.id });
            if (!rank) {
                return res.notFound('Rank not found');
            }
            return res.json(rank);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new rank
    create: async (req, res) => {
        try {
            // Create the new rank
            const rank = await Rank.create(req.body).fetch();
            return res.status(201).json(rank);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing rank
    update: async (req, res) => {
        try {
            const rank = await Rank.updateOne({ id: req.params.id }).set(req.body);
            if (!rank) {
                return res.notFound('Rank not found');
            }
            return res.json(rank);
        } catch (error) {
            return res.serverError(error);
        }
    },
};
