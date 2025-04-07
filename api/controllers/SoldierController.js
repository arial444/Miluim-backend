module.exports = {
    get: async (req, res) => {
        try {
            const soldiers = await Soldier.find();
            return res.json(soldiers);
        } catch (error) {
            return res.serverError(error);
        }
    }

}