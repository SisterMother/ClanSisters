const {Clan, Forum, Post, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let clan = mockDB.clans[0];
let forum = mockDB.forums[0];
let post = mockDB.posts[0];

describe('Post Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new Posts', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.id;
        return Post.create(post);
      })
      .then((newPost) => {
        expect(newPost).to.exist;
        expect(newPost.title).to.equal(post.title);
        expect(newPost.body).to.equal(post.body);
        expect(newPost.userId).to.equal(post.userId);
        expect(newPost.forumId).to.equal(post.forumId);
        done();
      });
  });

  it('reads existing Posts', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.id;
        return Post.create(post);
      })
      .then(newPost => {
        return Post.read({id: newPost.id});
      })
      .then((newPost) => {
        expect(newPost).to.exist;
        expect(newPost.title).to.equal(post.title);
        expect(newPost.body).to.equal(post.body);
        expect(newPost.userId).to.equal(post.userId);
        expect(newPost.forumId).to.equal(post.forumId);
        done();
      });
  });

  it('updates existing Posts', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.id;
        return Post.create(post);
      })
      .then(newPost => {
        post.id = newPost.id;
        return Post.update({id: newPost.id}, {title: 'TEST'} );
      })
      .then(newPost => {
        return Post.read({id: post.id});
      })
      .then((newPost) => {
        expect(newPost).to.exist;
        expect(newPost.title).to.equal('TEST');
        expect(newPost.body).to.equal(post.body);
        expect(newPost.userId).to.equal(post.userId);
        expect(newPost.forumId).to.equal(post.forumId);
        done();
      });
  });

  it('deletes existing Posts', (done) => {
    User.model.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.id;
        return Post.create(post);
      })
      .then(newPost => {
        post.id = newPost.id;
        return Post.delete({id: newPost.id});
      })
      .then(newPost => {
        return Post.read({id: post.id});
      })
      .then((newPost) => {
        expect(newPost).to.equal(null);
        done();
      });
  });
});
