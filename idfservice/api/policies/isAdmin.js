module.exports = async function (req, res, proceed) {
    if (req.user && req.user.role === 'admin') {
      return proceed();
    }
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  };  