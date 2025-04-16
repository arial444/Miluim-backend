module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        category: {
            type: 'string',
            isIn: ['personal', 'shooting', 'logistics', 'explosive', 'arsenal', 'other'],
            defaultsTo: 'other',
        }
    },

    tableName: 'items',
}