const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },

    password: {
      type: 'string',
      required: true,
      protect: true, // hides from JSON output
    },

    name: {
      type: 'string',
      required: true,
    },

    lastname: {
      type: 'string',
      required: true,
    },

    role: {
      type: 'string',
      isIn: ['user', 'admin', 'manager'],
      defaultsTo: 'user',
    },
  },

  customToJSON: function () {
    // Never return password hash
    return _.omit(this, ['password']);
  },

  beforeCreate: async function (user, proceed) {
    if (!user.password) return proceed();
    try {
      const hashed = await bcrypt.hash(user.password, 10);
      user.password = hashed;
      return proceed();
    } catch (err) {
      return proceed(err);
    }
  },

  beforeUpdate: async function (valuesToUpdate, proceed) {
    if (valuesToUpdate.password) {
      try {
        const hashed = await bcrypt.hash(valuesToUpdate.password, 10);
        valuesToUpdate.password = hashed;
      } catch (err) {
        return proceed(err);
      }
    }
    return proceed();
  },

  tableName: 'users',
};
