var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if(err) {
          res.status(404).send(err);
        } else {
          res.status(200).json(results);
        }
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

