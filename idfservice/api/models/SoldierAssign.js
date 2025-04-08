module.exports = {
    attributes: {
        soldierId: {
            model: 'soldier',
            required: true
        },
        assign: {
            model: 'assign',
            required: true
        },
    },

    tableName: 'soldierAssigns'
};