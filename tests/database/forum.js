const {Clan, Forum, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let clan = mockDB.clans[0];
let forum = mockDB.forums[0];

describe('Forum Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new Forums', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then((newForum) => {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal(forum.name);
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('limits the number of new Forums', (done) => {
    let name = forum.name;
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        throw new Error('A forum limit didnt exist!');
      })
      .catch(error => {
        expect(error.message).to.equal('A clan can only have 5 forums!');
        done();
      });
  });

  it('reads existing Forums', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        return Forum.read({id: newForum.id});
      })
      .then(newForum => {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal(forum.name);
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('updates existing forums', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(({id}) => {
        forum.id = id;
        return Forum.update({id}, {name: 'TEST'} );
      })
      .then(() => {
        return Forum.read({id: forum.id});
      })
      .then(newForum => {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal('TEST');
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('deletes existing Forums', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(({id}) => {
        forum.id = id;
        return Forum.delete({id});
      })
      .then(() => {
        return Forum.read({id: forum.id});
      })
      .then(newForum => {
        expect(newForum).to.equal(null);
        done();
      });
  });
});
