const dummy = () => 1;

const totalLikes = blogs => blogs.reduce((total, { likes }) => total + likes, 0);

const favoriteBlog = blogs =>
  blogs.reduce((fav, blog) => (blog.likes > (fav?.likes ?? 0) ? blog : fav), null);

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
