module.exports = {
    attributes: {
        soldierId: {
            model: 'soldier',
            required: true
        },
        item: {
            model: 'item',
            required: true
        },
        currentHolder: {
            model: 'soldier',
            required: true
        },
    },

    tableName: 'signs'
}