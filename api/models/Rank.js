module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            maxLength: 255
        },
        officer: {
            type: 'boolean',
            defaultsTo: false,
        }
    },

    tableName: 'ranks'
}