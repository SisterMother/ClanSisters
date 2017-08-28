const User = require('./user');
const Clan = require('./clan');
const {Sequelize, db} = require('../connection');

/**
 * Set up join table between users and posts.
 */
const ClanFeedModel = db.define('clanFeed', {
  text: {
    type: Sequelize.STRING(128),
  }
});

let ClanFeed = {model: ClanFeedModel};

ClanFeed.createMessage = ({userId, clanId, text}) => {
  return User.find({id: userId})
    .then((user) => {
      if (!user) { throw new Error('No such user! ' + userId); }
      return Clan.find({id: clanId});
    })
    // TODO - Check if user is in the clan before allowing them to post in its feed
    .then((clan) => {
      if (!clan) { throw new Error('No such clan! ' + clanId); }
      return ClanFeed.model.create({
        text, userId, clanId
      });
    });
};

// TODO - Ban access to retrieving messages unless the user is a part of the clan
ClanFeed.getMessages = ({clanId}) => {
  return Clan.find({id: clanId})
    .then((clan) => {
      if (!clan) { throw new Error('No such clan! ' + clanId); }
      return ClanFeed.model.findAll({
        where: {clanId}
      });
    });
};

module.exports = ClanFeed;