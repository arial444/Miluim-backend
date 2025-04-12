module.exports = {
    // Fetch all assignments
    get: async (req, res) => {
        try {
            const assigns = await Assign.find();
            return res.json(assigns);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single assignment by ID
    view: async (req, res) => {
        try {
            const assign = await Assign.findOne({ id: req.params.id });
            if (!assign) {
                return res.notFound('Assignment not found');
            }
            return res.json(assign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new assignment
    create: async (req, res) => {
        try {
            const { name } = req.body;

            // Create the new assignment
            const assign = await Assign.create({ name }).fetch();
            return res.status(201).json(assign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing assignment
    update: async (req, res) => {
        try {
            const { name } = req.body;

            const assign = await Assign.updateOne({ id: req.params.id }).set({ name });
            if (!assign) {
                return res.notFound('Assignment not found');
            }
            return res.json(assign);
        } catch (error) {
            return res.serverError(error);
        }
    }
};
