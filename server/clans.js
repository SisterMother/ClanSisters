const router = require('express').Router();
const {Clan, User, ClanFeed} = require('../database');
const auth = require('./authMiddleware');

router.get('/', (req, res) => {
  return Clan.findAll(req.query)
    .then(clans => {
      res.json({results: clans});
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.get('/:clan', (req, res) => {
  return Clan.read({id: req.params.clan})
    .then(clan => {
      if (clan) {
        res.json({results: clan});
      } else {
        res.status(400).send('Clan doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.get('/:clan/members', (req, res) => {
  return Clan.model.findOne({
    include: [{
      model: User.model,
    }],
    where: {id: req.params.clan}
  })
    .then((clan) => {
      if (clan) {
        res.json({results: clan.members});
      } else {
        throw new Error('Clan does not exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post('/', auth.isLoggedIn(), (req, res) => {
  return Clan.create(req.body, req.user)
    .then(newClan => {
      res.status(201).json(newClan);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post('/:clan', auth.isLoggedIn(), (req, res) => {
  return Clan.update({id: req.params.clan}, req.body, req.user)
    .spread(affected => {
      if (affected) {
        res.sendStatus(202);
      } else {
        res.status(400).send('Clan doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.delete('/:clan', auth.isLoggedIn(), (req, res) => {
  return Clan.delete({id: req.params.clan})
    .then(affected => {
      if (affected) {
        res.sendStatus(202);
      } else {
        res.status(400).send('Clan doesn\'t exist');
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.get('/:clan/feed', (req, res) => {
  ClanFeed.createMessage({userId: req.user.id, clanId: req.body.clanId, text: req.body.text})
    .then(message => {
      res.json({results: message});
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post('/:clan/feed', (req, res) => {
  ClanFeed.getMessages({clanId: req.body.clanId})
    .then(messages => {
      res.json({results: messages});
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

module.exports = router;
