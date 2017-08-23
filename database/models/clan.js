const User = require('./user');
const {Sequelize, db} = require('../connection');

const ClanModel = db.define('clan', {
  name: {
    type: Sequelize.STRING(64),
    allowNull: false,
    unique: true
  },
  tag: {
    type: Sequelize.STRING(8),
    allowNull: true,
  },
  avatar: {
    type: Sequelize.STRING(144),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING(144),
    allowNull: true,
  },
});

let Clan = {model: ClanModel};

const joinArray = [
  {
    model: User.model,
    association: 'creator',
    attributes: {
      exclude: [
        'password', 'salt'
      ]
    }
  }, {
    model: User.model,
    association: 'members',
    attributes: {
      exclude: [
        'password', 'salt'
      ]
    }
  }
];

Clan.findAll = (query = {}) => {
  return ClanModel.findAll({
    where: query,
    include: joinArray
  })
    .map(clan => clan.toJSON());
};

const MAX_CLANS_PER_USER = 5;

/**
 * Clan crud methods.
 */
Clan.create = (creator, {name, tag, avatar, description}) => {
  let creatorId = creator.id;
  return ClanModel.findOne({where: {name}})
    .then((clan) => {
      if (clan) {
        throw new Error('Clan already exists');
      }
      return ClanModel.findAll({where: {creatorId}});
    })
    .then(clans => {
      if (clans.length + 1 > MAX_CLANS_PER_USER) {
        throw new Error(`A user can only have ${MAX_CLANS_PER_USER} clans!`);
      }
      return ClanModel.create({name, creatorId, tag, avatar, description});
    })
    .then(clan => clan.reload({
      include: joinArray
    })
    )
    .then(clan => clan.toJSON());
};

Clan.read = Clan.find = (query) => {
  return ClanModel.findOne({
    where: query,
    include: joinArray
  })
    .then(clan => clan && clan.toJSON());
};

Clan.update = (user, query, values) => {
  return ClanModel.findOne({
    where: query
  })
    .then((clan) => {
      if (!clan) {
        throw new Error('Clan could not be found');
      }
      if (clan.creatorId !== user.id) {
        throw new Error('Users cannot modify clans they do not own');
      }
      return ClanModel.update(values, {where: query});
    });
};

Clan.delete = (user, query) => {
  return ClanModel.findOne({
    where: query
  })
    .then((clan) => {
      if (!clan) {
        throw new Error('Clan could not be found');
      }
      if (clan.creatorId !== user.id) {
        throw new Error('Users cannot delete clans they do not own');
      }
      return ClanModel.destroy({where: query});
    });
};

module.exports = Clan;