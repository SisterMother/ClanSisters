// const {expect} = require('chai');
// const {app} = require('../../server/server');
// const request = require('supertest').agent(app);
// const {db} = require('../../database/connection');

// let clan = {name: 'test_clan_please_ignore'};
// let forum = {name: 'test_forum_please_ignore', clanId: 0};
// let post = {
//   forumId: 0,
//   title: 'test_post_please_ignore', 
//   body: 'test_body_please_ignore',
// };

// describe('Forums API Endpoint', () => {
//   beforeEach((done) => {
//     db.sync({force: true})
//       .then(() => {
//         done();
//       });
//   });

//   it('should retrieve an array', (done) => {
//     request.get('/api/clans')
//       .expect(200)
//       .then(res => {
//         expect(res.body.results).to.exist;
//         expect(res.body.results).to.be.an('array');
//         done();
//       });
//   });

//   it('should insert new forum', (done) => {
//     request.post('/api/clans')
//       .send(clan)
//       .then(res => {
//         forum.clanId = res.body.id;
//         return request.post('/api/forums')
//           .send(forum);
//       })
//       .then(res => {
//         return request.get(`/api/forums/${res.body.id}`);
//       })
//       .then(res => {
//         expect(res.body.results).to.exist;
//         expect(res.body.results).to.be.an('object');
//         expect(res.body.results.name).to.equal(forum.name);
//         expect(res.body.results.clanId).to.equal(forum.clanId);
//         done();
//       });
//   });

//   it('should retrieve existing forums with a query', (done) => {
//     request.post('/api/clans')
//       .send(clan)
//       .then(res => {
//         forum.clanId = res.body.id;
//         return request.post('/api/forums')
//           .send(forum);
//       })
//       .then(res => {
//         let name = res.body.name;
//         return request.get('/api/forums')
//           .query({name});
//       })
//       .then(res => {
//         expect(res.body.results.length).to.equal(1);
//         expect(res.body.results[0].clanId).to.equal(forum.clanId);
//         expect(res.body.results[0].name).to.equal(forum.name);
//       })
//       .then(() => {
//         return request.get('/api/forums')
//           .query({name: 'Barbara_Streisand'});
//       })
//       .then(res => {
//         expect(res.body.results.length).to.equal(0);
//         done();
//       });
//   });
  
//   it('should update existing clans', (done) => {
//     let id;
//     request.post('/api/clans')
//       .send(clan)
//       .then(res => {
//         forum.clanId = res.body.id;
//         return request.post('/api/forums/1')
//           .send({name: 'Fred\'s Club'})
//           .expect(400);
//       })
//       .then(() => {
//         return request.post('/api/forums/')
//           .send(forum);
//       })
//       .then(res => {
//         id = res.body.id;
//         return request.post(`/api/forums/${id}`)
//           .send({name: 'Fred\'s Club'})
//           .expect(202);
//       })
//       .then(res => {
//         return request.get(`/api/forums/${id}`)
//           .expect(200);
//       })
//       .then(res => {
//         expect(res.body.results.name).to.equal('Fred\'s Club');
//         done();
//       });
//   });

//   it('should delete existing forums', (done) => {
//     let id;
//     request.post('/api/clans')
//       .send(clan)
//       .then(res => {
//         forum.clanId = res.body.id;
//         return request.post('/api/forums/')
//           .send(forum);
//       })
//       .then(res => {
//         id = res.body.id;
//         return request.get(`/api/forums/${id}`);
//       })
//       .then(res => {
//         expect(res.body.results.name).to.equal(forum.name);
//       })
//       .then(() => {
//         return request.delete(`/api/forums/${id}`)
//           .expect(202);
//       })
//       .then(() => {
//         return request.get(`/api/forums/${id}`);
//       })
//       .then(res => {
//         expect(res.body.results).to.equal(undefined);
//         done();
//       });
//   });

//   it('should create posts', (done) => {
//     request.post('/api/clans')
//       .send(clan)
//       .then(res => {
//         forum.clanId = res.body.id;
//         return request.post('/api/forums/')
//           .send(forum);
//       })
//       .then(res => {
//         post.forumId = res.body.id;
//         return request.post(`/api/forums/${post.forumId}/posts`)
//           .send(post);
//       })
//       .then(res => {
//         post.id = res.body.id;
//         return request.get(`/api/forums/${post.forumId}/posts/${post.id}`);
//       })
//       .then(res => {
//         expect(res.body.body).to.equal(post.body); 
//         expect(res.body.title).to.equal(post.title);
//         done();
//       });
//   });
// });
