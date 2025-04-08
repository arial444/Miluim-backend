module.exports = {
    attributes: {
        personalNumber: {
            type: 'string',
            maxLength: 255,
            required: true,
            unique: true
        },
        rank: {
            model: 'rank',
            required: true
        },
        department: {
            model: 'department',
            required: true
        },
        name: {
            type: 'string',
            maxLength: 255,
            required: true
        },
        lastname: {
            type: 'string',
            maxLength: 255,
            required: true
        },
        email: {
            type: 'string',
            maxLength: 255,
        },
        phone: {
            type: 'string',
            maxLength: 255,
        },
        city: {
            type: 'string',
            maxLength: 255,
        },
        address: {
            type: 'string',
            maxLength: 255,
        },
        birthday: {
            type: 'ref',
            columnType: 'datetime',
        },
        license: {
            type: 'string',
            isIn: ['auto', 'manual', 'truck'],
        },
        status: {
            type: 'string',
            isIn: ['active', 'inactive', 'suspended'],
        }
    },

    tableName: 'soldiers'
};