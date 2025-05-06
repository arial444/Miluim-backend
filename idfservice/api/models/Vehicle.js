module.exports = {
    attributes: {
        type: {
            type: 'string',
            required: true,
        },
        departmentId: {
            model: 'department',
            required: true,
        },
        number: {
            type: 'string',
            maxLength: 255,
            required: true,
        },
        status: {
            type: 'string',
            isIn: ['active','maintenance','disabled'],
            defaultsTo: 'active',
        }
    },

    tableName: 'vehicles'
}