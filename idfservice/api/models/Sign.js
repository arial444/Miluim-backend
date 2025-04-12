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
        amount: {
            type: 'number',
            defaultsTo: 1,
        },
        number: {
            type: 'string',
            maxLength: 255,
            defaultsTo: '',
        },
        currentHolder: {
            model: 'soldier',
            required: true
        },
        comment: {
            type: 'string',
            maxLength: 1050,
            defaultsTo: '',
        },
    },

    tableName: 'signs'
}