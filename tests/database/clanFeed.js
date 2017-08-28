const {Clan, ClanFeed, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let clan = mockDB.clans[0];
let forum = mockDB.forums[0];

describe('ClanFeed Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('Should insert new feed messages', (done) => {
    let feedText = 'this is a feed message';
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan)
          .then((newClan) => {
            return ClanFeed.createMessage({
              userId: newUser.id,
              clanId: newClan.id,
              text: feedText
            })
            .then((feedMessage) => {
              expect(feedMessage.id).to.exist;
              expect(feedMessage.userId).to.equal(newUser.id);
              expect(feedMessage.clanId).to.equal(newClan.id);
              expect(feedMessage.text).to.equal(feedText);
              done();
            });
          });
      });
  });

  it('Should retrieve feed messages', (done) => {
    let feedText = 'this is a feed message';
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan)
          .then((newClan) => {
            return ClanFeed.createMessage({
              userId: newUser.id,
              clanId: newClan.id,
              text: feedText
            })
            .then(() => {
              return ClanFeed.getMessages({clanId: newClan.id})
                .then((clanFeed) => {
                  expect(clanFeed).to.exist;
                  expect(clanFeed).to.be.a('array');
                  expect(clanFeed.length).to.equal(1);
                  let feedMessage = clanFeed[0];
                  expect(feedMessage.id).to.exist;
                  expect(feedMessage.userId).to.equal(newUser.id);
                  expect(feedMessage.clanId).to.equal(newClan.id);
                  expect(feedMessage.text).to.equal(feedText);
                  done();
                });
            });
          });
      });
  });
});
