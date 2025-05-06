/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // Check if any role exists
  if (await Permission.count() <= 0) {

    // Get all models
    const models = Object.keys(sails.models);

    const roles = await Role.find();
    if (roles.length === 0) {
      sails.log.warn('No roles found in the database. Please seed the roles first.');
      return;
    }

    // Create permissions for each role
    for (let role of roles) {
      for (let model of models) {
        const hasAllPermissions = (role.name === 'admin');

        const permissionData = {
          roleId: role.id,
          model: model,
          create: hasAllPermissions,
          view: hasAllPermissions,
          edit: hasAllPermissions,
          delete: hasAllPermissions
        };

        const permission = await Permission.create(permissionData).fetch();
        sails.log.info(`Permission ${permission.id} created for model ${model} [role ${role.name}]`);
      }
    }
  }
  else {
    const roles = await Role.find();

    for (let role of roles) {
      const permissions = await Permission.find({ roleId: role.id });
      sails.log.info(`Role ${role.name} has ${permissions.length} permissions`);

      // Get all models
      const models = Object.keys(sails.models);

      for (let model of models) {
        const permissionExists = await Permission.findOne({ roleId: role.id, model: model });

        if (!permissionExists) {
          const hasAllPermissions = (role.name === 'admin');

          const permissionData = {
            roleId: role.id,
            model: model,
            create: hasAllPermissions,
            view: hasAllPermissions,
            edit: hasAllPermissions,
            delete: hasAllPermissions
          };

          const permission = await Permission.create(permissionData).fetch();
          sails.log.info(`Permission ${permission.id} created for model ${model} [role ${role.name}]`);
        }
        
      }
    }
  }

};
