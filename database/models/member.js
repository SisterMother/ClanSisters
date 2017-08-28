const User = require('./user');
const Clan = require('./clan');
const {Sequelize, db} = require('../connection');

/**
 * Set up join table,
 * @todo roles
 */
const MemberModel = db.define('member', {
  confirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

let Member = {model: MemberModel};

Member.create = Member.joinUserToClan = (userId, clanId, confirmed = false) => {
  
  return User.find({id: userId})
    .then(user => {
      if (!user) { throw new Error('No such user! ' + userId); }
      return Clan.find({id: clanId});
    })
    .then(clan => {
      if (!clan) { throw new Error('No such clan! ' + clanId); }
      return MemberModel.create({userId, clanId, confirmed});
    });
};

Member.read = Member.find = (query) => {
  return Member.model.findOne(query);
};

Member.readAll = Member.findAll = (query = {}) => {
  return Member.model.findAll({where: query});
};

Member.confirm = ({userId, clanId}) => {
  return Member.model.update({confirmed: true}, {userId, clanId});
};

Member.delete = ({userId, clanId}) => {
  return Member.model.destroy({where: {userId, clanId}});
};

module.exports = Member;