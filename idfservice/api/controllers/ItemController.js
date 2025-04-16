module.exports = {
    // Fetch all items
    get: async (req, res) => {
        try {
            const items = await Item.find();
            return res.json(items);
        } catch (error) {
            return res.serverError(items);
        }
    },

    // View a single item by ID
    view: async (req, res) => {
        try {
            const item = await Item.findOne({ id: req.params.id });
            if (!item) {
                return res.notFound('Item not found');
            }
            return res.json(item);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new item
    create: async (req, res) => {
        try {
            // Check if item is already exists
            const existingItem = await Item.findOne({ name: req.body.name });
            if (existingItem) {
                return res.badRequest('Item already exists');
            }

            // Create the new item
            const item = await Item.create(req.body).fetch();
            return res.status(201).json(item);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing item
    update: async (req, res) => {
        try {

            const item = await Item.updateOne({ id: req.params.id }).set(req.body);
            if (!item) {
                return res.notFound('Item not found');
            }
            return res.json(item);
        } catch (error) {
            return res.serverError(error);
        }
    }
};
