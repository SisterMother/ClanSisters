const {User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let user2 = mockDB.users[1];

describe('User Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new users', (done) => {
    User.model.create(user)
      .then((newUser) => {
        expect(newUser.id).to.exist;
        expect(newUser.steamId).to.exist;
        expect(newUser.steamAvatarImageUrl).to.exist;
        expect(newUser.steamProfileUrl).to.exist;
        expect(newUser.steamScreenName).to.exist;
        expect(newUser.steamRealName).to.exist;
        done();
      });
  });
});
