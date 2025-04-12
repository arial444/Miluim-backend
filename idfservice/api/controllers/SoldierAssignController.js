module.exports = {
    // Fetch all soldierAssigns
    get: async (req, res) => {
        try {
            const soldierAssigns = await SoldierAssign.find();
            return res.json(soldierAssigns);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single soldierAssign by ID
    view: async (req, res) => {
        try {
            const soldierAssign = await SoldierAssign.findOne({ id: req.params.id });
            if (!soldierAssign) {
                return res.notFound('SoldierAssign not found');
            }
            return res.json(soldierAssign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new soldierAssign
    create: async (req, res) => {
        try {
            // Create the new soldierAssign
            const soldierAssign = await SoldierAssign.create(req.body).fetch();
            return res.status(201).json(soldierAssign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing soldierAssign
    update: async (req, res) => {
        try {
            const soldierAssign = await SoldierAssign.updateOne({ id: req.params.id }).set(req.body);
            if (!soldierAssign) {
                return res.notFound('SoldierAssign not found');
            }
            return res.json(soldierAssign);
        } catch (error) {
            return res.serverError(error);
        }
    },
};
