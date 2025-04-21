module.exports = {
        // Fetch all item sets
        get: async (req, res) => {
            try {
                const rawData = await sails.sendNativeQuery('CALL GetAllItemSets()');
            
                if (!rawData || !rawData.rows) {
                    return res.notFound('No item sets found');
                }
    
                const itemSets = rawData.rows[0];
                return res.json(itemSets);
            } catch (error) {
                return res.serverError(error);
            }
        },
    
        // View a single item set by ID
        view: async (req, res) => {
            try {
                const itemSet = await ItemSet.findOne({ id: req.params.id });
                if (!itemSet) {
                    return res.notFound('Item set not found');
                }
                return res.json(itemSet);
            } catch (error) {
                return res.serverError(error);
            }
        },
    
        // Create a new item set
        create: async (req, res) => {
            try {
                // Check if item set is already exists
                const existingItemSet = await ItemSet.findOne({ name: req.body.name });
                if (existingItemSet) {
                    return res.badRequest('Item set already exists');
                }

                // Create the new item set
                const itemSet = await ItemSet.create(req.body).fetch();
                return res.status(201).json(itemSet);
            } catch (error) {
                return res.serverError(error);
            }
        },
    
        // Update an existing item set
        update: async (req, res) => {
            try {
                const itemSet = await ItemSet.updateOne({ id: req.params.id }).set(req.body);
                if (!itemSet) {
                    return res.notFound('Item set not found');
                }
                return res.json(itemSet);
            } catch (error) {
                return res.serverError(error);
            }
        },
}