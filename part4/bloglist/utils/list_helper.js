const dummy = () => 1;

const totalLikes = blogs => blogs.reduce((total, { likes }) => total + likes, 0);

module.exports = {
  dummy,
  totalLikes,
};
