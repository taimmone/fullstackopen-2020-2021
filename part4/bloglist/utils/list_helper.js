const dummy = () => 1;

const totalLikes = blogs => blogs.reduce((total, { likes }) => total + likes, 0);

const favoriteBlog = blogs =>
  blogs.reduce((fav, blog) => (blog.likes > (fav?.likes ?? 0) ? blog : fav), null);

const mostLikes = blogs =>
  blogs
    ?.map(({ author }) => ({
      author,
      likes: blogs.reduce(
        (numberOfLikes, blog) =>
          blog.author === author ? numberOfLikes + blog.likes : numberOfLikes,
        0
      ),
    }))
    .reduce(
      (authorWithMostLikes, authorBlogs) =>
        authorBlogs.likes > (authorWithMostLikes?.likes ?? 0) ? authorBlogs : authorWithMostLikes,
      null
    );

const mostBlogs = blogs =>
  blogs
    ?.map(({ author }) => ({
      author,
      blogs: blogs.reduce(
        (numberOfBlogs, blog) => (blog.author === author ? numberOfBlogs + 1 : numberOfBlogs),
        0
      ),
    }))
    .reduce(
      (authorWithMostBlogs, authorBlogs) =>
        authorBlogs.blogs > (authorWithMostBlogs?.blogs ?? 0) ? authorBlogs : authorWithMostBlogs,
      null
    );

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
