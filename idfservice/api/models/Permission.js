module.exports = {
    attributes: {
        roleId: {
            model: 'role',
            required: true
        },
        model: {
            type: 'string',
            maxLength: 255,
            required: true,
        },
        view: {
            type: 'boolean',
            defaultsTo: false,
        },
        edit: {
            type: 'boolean',
            defaultsTo: false,
        },
        create: {
            type: 'boolean',
            defaultsTo: false,
        },
        delete: {
            type: 'boolean',
            defaultsTo: false,
        },
    },

    tableName: 'permissions'
};