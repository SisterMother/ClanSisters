const {Clan, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let clan = mockDB.clans[0];

describe('Clan Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new clans', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.creatorId = newUser.id;
        return Clan.create(user, clan);
      })
      .then((newClan) => {
        expect(newClan).to.exist;
        expect(newClan.name).to.equal(clan.name);
        expect(newClan.creatorId).to.equal(user.id);
        done();
      });
  });

  it('does not allow duplicate clans', (done) => {
    User.model.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        return Clan.create(user, clan);
      })
      .catch((error) => {
        expect(error.message).to.equal('Clan already exists');
        done();
      });
  });

  it ('returns clan data on read', (done) => {
    User.model.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(({id}) => {
        return Clan.read({id});
      })
      .then((newClan) => {
        expect(newClan.id).to.exist;
        expect(newClan.name).to.exist;
        done();
      });
  });

  it ('updates clan data', (done) => {
    User.model.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(({id}) => {
        clan.id = id;
        return Clan.update(user, {id}, {name: 'TEST'});
      })
      .then(() => {
        return Clan.read(clan.id);
      })
      .then((newClan) => {
        expect(newClan.id).to.exist;
        expect(newClan.name).to.equal('TEST');
        done();
      });
  });

  it ('deletes clan data', (done) => {
    User.model.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(({id}) => {
        clan.id = id;
        return Clan.delete(user, {id});
      })
      .then(() => {
        return Clan.read(clan.id);
      })
      .then((newClan) => {
        expect(newClan).to.equal(null);
        done();
      });
  });

  it('does not allow a single user more than 5 clans', (done) => {
    User.model.create(user)
      .then((newUser) => {
        clan.creatorId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(user, clan);
      })
      .then(() => {
        throw new Error('A clan limit didnt exist!');
      })
      .catch((error) => {
        expect(error.message).to.equal('A user can only have 5 clans!');
        done();
      });
  });
});
