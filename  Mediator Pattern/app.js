const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (user in users) {
          if (users[user] !== from) {
            users[user].receive(message, from);
          }
        }
      }
    },
  };
};

const abdou = new User("abdou");
const hatim = new User("hatim");
const younes = new User("younes");

const chatroom = new Chatroom();

chatroom.register(abdou);
chatroom.register(hatim);
chatroom.register(younes);

abdou.send("fen a hatim baraka mn l bkka", hatim);
abdou.send("fen a younes", younes);
younes.send("fen a abdo hani", abdou);
hatim.send("fen alkhouttt hanyinnne?? 3ad fa9t db");
