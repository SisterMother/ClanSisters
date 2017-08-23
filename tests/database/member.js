const {User, Clan, Member} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let user2 = mockDB.users[1];
let clan = mockDB.clans[0];

describe('Member Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });
  
  it('inserts new members', (done) => {
    User.model.create(user)
      .then(newUser => {
        user.id = newUser.id;
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        return Member.create(user.id, newClan.id);
      })
      .then(newMember => {
        expect(newMember).to.exist;
        done();
      });
  });

  it('reads a member', (done) => {
    User.model.create(user)
      .then(newUser => {
        user.id = newUser.id;
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        return Member.create(user.id, newClan.id);
      })
      .then(newMember => {
        return Member.read({id: newMember.id});
      })
      .then(readMember => {
        expect(readMember).to.exist;
        expect(readMember.userId).to.equal(user.id);
        expect(readMember.clanId).to.equal(clan.id);
        done();
      });
  });

  it('reads members', (done) => {
    User.model.create(user)
      .then(newUser => {
        user.id = newUser.id;
        return User.model.create(user2);
      })
      .then(newUser => {
        user2 = newUser;
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        return Member.create(user.id, newClan.id);
      })
      .then(() => {
        return Member.create(user2.id, clan.id);
      })
      .then(newMember => {
        return Member.readAll();
      })
      .then(readMember => {
        expect(readMember).to.exist;
        expect(Array.isArray(readMember)).to.equal(true);
        expect(readMember[0].userId).to.equal(user.id);
        expect(readMember[1].userId).to.equal(user2.id);
        expect(readMember[0].clanId).to.equal(clan.id);
        expect(readMember[1].clanId).to.equal(clan.id);
        done();
      });
  });
});
