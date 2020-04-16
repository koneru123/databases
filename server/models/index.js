var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages

    post: function (callback) {
      db.query('INSERT INTO messages (userID, roomname, bodyMessage) VALUES("priyanka", "hr", "This is a test")', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Success');
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

