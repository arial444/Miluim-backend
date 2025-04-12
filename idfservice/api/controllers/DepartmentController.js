module.exports = {
    // Fetch all departments
    get: async (req, res) => {
        try {
            const departments = await Department.find();
            return res.json(departments);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single department by ID
    view: async (req, res) => {
        try {
            const department = await Department.findOne({ id: req.params.id });
            if (!department) {
                return res.notFound('Department not found');
            }
            return res.json(department);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new department
    create: async (req, res) => {
        try {
            const { name } = req.body;

            // Create the new department
            const department = await Department.create({ name }).fetch();
            return res.status(201).json(department);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing department
    update: async (req, res) => {
        try {
            const { name } = req.body;

            const department = await Department.updateOne({ id: req.params.id }).set({ name });
            if (!department) {
                return res.notFound('Department not found');
            }
            return res.json(department);
        } catch (error) {
            return res.serverError(error);
        }
    }
};