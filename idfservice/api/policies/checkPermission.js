module.exports = async function (req, res, proceed) {
    try {
        const user = req.user; // make sure `isAuthenticated` policy runs first

        if (!user || !user.role) {
            return res.status(403).json({ error: 'Access denied: No role assigned' });
        }

        const method = req.method.toUpperCase();
        let model = req.options.model || req.options.controller; // detects the model/controller being accessed

        if (model && model.includes('Controller')) {
            model = model.replace('Controller', '').trim();
        }

        const permission = await Permission.findOne({
            roleId: user.role,
            model: model.toLowerCase(),
        });

        if (!permission) {
            return res.status(403).json({ error: 'Access denied: No permission record found' });
        }

        const allowed =
            (method === 'GET' && permission.view) ||
            (method === 'POST' && permission.create) ||
            ((method === 'PUT' || method === 'PATCH') && permission.edit) ||
            (method === 'DELETE' && permission.delete);

        if (!allowed) {
            return res.status(403).json({ error: 'Access denied: Insufficient permissions' });
        }

        return proceed();
    } catch (err) {
        sails.log.error('Permission check failed:', err);
        return res.status(500).json({ error: 'Permission policy error' });
    }
};
