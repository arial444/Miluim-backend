module.exports = {
    // Fetch all signs
    get: async (req, res) => {
        try {
            const rawData = await sails.sendNativeQuery('CALL GetAllSigns()');
            
            if (!rawData || !rawData.rows) {
                return res.notFound('No signs found');
            }

            const signs = rawData.rows[0];
            return res.json(signs);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // View a single sign by ID
    view: async (req, res) => {
        try {
            const sign = await Sign.findOne({ id: req.params.id });
            if (!sign) {
                return res.notFound('Sign not found');
            }
            return res.json(sign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Create a new sign
    create: async (req, res) => {
        try {
            // Create the new sign
            const sign = await Sign.create(req.body).fetch();
            return res.status(201).json(sign);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // Update an existing sign
    update: async (req, res) => {
        try {
            const sign = await Sign.updateOne({ id: req.params.id }).set(req.body);
            if (!sign) {
                return res.notFound('Sign not found');
            }
            return res.json(sign);
        } catch (error) {
            return res.serverError(error);
        }
    },
};
