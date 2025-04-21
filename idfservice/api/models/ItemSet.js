module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
        },
        itemIds: {
            type: 'json',
            required: true,
        },
    },

    tableName: 'itemsets',
}