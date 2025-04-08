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
        number: {
            type: 'string',
            maxLength: 255,
            required: true
        },
        currentHolder: {
            model: 'soldier',
            required: true
        },
    },

    tableName: 'signsExtra'
}