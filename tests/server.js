const supertest = require('supertest');
const { app } = require('../server/server');
const request = supertest.agent(app);
const { User, Clan, Member } = require('../database');
const {db} = require('../database/connection');
const {expect} = require('chai');
const mockDB = require('./mockDB.json');

let user = mockDB.users[0];
let user2 = mockDB.users[1];
let clan = mockDB.clans[0];

/**
 * @todo Double check with the database that changes went through.
 */
describe('Express Middleware', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('should have index.html', (done) => {
    request.get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .then(() => {
        done();
      });
  });

  it('should have users', (done) => {
    request.get('/api/users')
      .expect(200)
      .then(() => {
        done();
      });
  });

  it('should return users from get to /users/:user', (done) => {
    User.model.create(user)
      .then(newUser => {
        return request.get(`/api/users/${newUser.id}`)
          .expect(200)
          .expect('Content-Type', /json/);
      })
      .then(() => {
        done();
      });
  });

  it('should create a new member with post to /users/:user/members/ ', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        return request.post(`/api/users/${clan.userId}/members`)
          .send({clanId: newClan.id})
          .set('Content-Type', 'application/json')
          .expect(200);
      })
      .then(() => {
        done();
      });
  });

  it('should remove membership with delete to /users/:user/members/:member', (done) => {
    let userId;
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.create(user, clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        return request.post(`/api/users/${clan.userId}/members`)
          .send({clanId: newClan.id})
          .set('Content-Type', 'application/json')
          .expect(200);
      })
      .then(response => {
        return request.delete(`/api/users/${clan.userId}/members/${clan.id}`);
      })
      .then(response => {
        expect(response.body.clanId).to.equal(String(clan.id));
        expect(response.body.userId).to.equal(String(clan.userId));
        done();
      });
  });
});
