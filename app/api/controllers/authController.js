class authController {
  static async registerUser(req, res) {
    res.json({ hola: 'ah' });
  }

  static async loginUser(req, res) {
    res.json({ hola: 'hoal' });
  }
}

module.exports = {
  registerUser: authController.registerUser,
  loginUser: authController.loginUser,
};
