class userController {
  static async getUsers(req, res) {
    res.json({ hola: 'lkdfj' });
  }
}

module.exports = {
  getUsers: userController.getUsers,
};
