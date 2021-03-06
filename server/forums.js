const router = require('express').Router();
const {Forum, Post} = require('../database');

router.get('/', (req, res) => {
  return Forum.findAll(req.query.id)
    .then(forums => {
      res.json({results: forums});
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.get('/:forum', (req, res) => {
  return Forum.read({id: req.params.forum})
    .then(forum => {
      if (forum) {
        res.json({results: forum});
      } else {
        res.status(400).send('Forum doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.get('/:forum/posts/:post', (req, res) => {
  Post.read({id: req.params.post})
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(400).send('Post does not exist');
      }
    });
});

router.get('/:forum/posts', (req, res) => {
  Post.model.findAll({
    where: {forumId: req.params.forum}
  })
    .then(forum => {
      if (forum) {
        res.json({results: forum});
      } else {
        throw new Error('Forum does not exist');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// Validation middleware goes here

router.post('/:forum/posts/:post', (req, res) => {
  Post.update({id: req.params.post}, req.body)
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(400).send('Post does not exist');
      }
    })
    .catch(err => {
      res.status(400).send('Post does not exist');
    });
});

router.delete('/:forum/posts/:post', (req, res) => {
  Post.delete({id: req.params.post})
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(400).send('Post does not exist');
      }
    })
    .catch(err => {
      res.status(400).send('Post does not exist');
    });
});

router.post('/:forum/posts', (req, res) => {
  Forum.read({id: req.params.forum})
    .then( forum => {
      let forumId = req.params.forum;

      let userId = req.body.userId;
      let title = req.body.title;
      let body = req.body.body;

      let upvotes = 0;
      let downvotes = 0;
      let pinned = false;

      if (forum) {
        return Post.create({title, body, upvotes, downvotes, pinned, userId, forumId});
      } else {
        throw new Error('Forum does not exist');
      }
    })
    .then( post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post('/', (req, res) => {
  return Forum.create(req.body)
    .then(forum => {
      res.status(201).json(forum);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post('/:forum', (req, res) => {
  Forum.update({id: req.params.forum}, req.body)
    .spread(affected => {
      if (affected) {
        res.sendStatus(202);
      } else {
        res.status(400).send('Forum doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.delete('/:forum', (req, res) => {
  Forum.delete({id: req.params.forum})
    .then(affected => {
      if (affected) {
        res.sendStatus(202);
      } else {
        res.status(400).send('Forum doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

module.exports = router;