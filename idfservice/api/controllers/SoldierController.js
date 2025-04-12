module.exports = {
    get: async (req, res) => {
        try {
            const rawData = await sails.sendNativeQuery('CALL GetAllSoldiers()');
            
            if (!rawData || !rawData.rows) {
                return res.notFound('No soldiers found');
            }

            const soldiers = rawData.rows[0];

            return res.json(soldiers);
        } catch (error) {
            return res.serverError(error);
        }
    },

    view: async (req, res) => {
        try {
            const soldier = await Soldier.findOne({ id: req.params.id });
            return res.json(soldier);
        }
        catch (error) {
            return res.serverError(error);
        }
    },

    create: async (req, res) => {
        try {
            if (req.body.birthday) {
                req.body.birthday = new Date(req.body.birthday);
            }

            const soldier = await Soldier.create(req.body).fetch();
            return res.status(201).json(soldier);
        } catch (error) {
            return res.serverError(error);
        }
    },

    update: async (req, res) => {
        try {
            if (req.body.birthday) {
                req.body.birthday = new Date(req.body.birthday);
            }

            const soldier = await Soldier.updateOne({ id: req.params.id }).set(req.body);
            if (!soldier) {
                return res.notFound('Soldier not found');
            }
            return res.json(soldier);
        } catch (error) {
            return res.serverError(error);
        }
    }

}