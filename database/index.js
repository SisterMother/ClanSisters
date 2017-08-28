const User = require('./models/user');
const Clan = require('./models/clan');
const Forum = require('./models/forum');
const Post = require('./models/post');
const Member = require('./models/member');
const PostVote = require('./models/postVote');
const ClanFeed = require('./models/clanFeed');

Clan.model.belongsTo(User.model, {as: 'creator'});
Clan.model.hasMany(Forum.model);

Clan.model.belongsToMany(User.model, {through: Member.model, as: 'members'});
User.model.belongsToMany(Clan.model, {through: Member.model, as: 'memberships'});

Forum.model.hasMany(Post.model);
User.model.hasMany(Post.model);

Post.model.belongsTo(User.model);

Post.model.belongsToMany(User.model, {through: PostVote.model});
User.model.belongsToMany(Post.model, {through: PostVote.model});

User.model.hasMany(ClanFeed.model);
Clan.model.hasMany(ClanFeed.model);

module.exports = {
  User,
  Clan,
  Forum,
  Post,
  Member,
  PostVote,
  ClanFeed
};
