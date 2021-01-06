const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
];

const listWithThreeBlogs = [
  listWithOneBlog[0],
  {
    _id: '5ff0021bca2ed0368aaa2a7b',
    title: 'A test blog',
    author: 'Abe Cee',
    url: 'about:blank',
    likes: 3,
    __v: 0,
  },
  {
    _id: '5ff00305ca2ed0368aaa2a7c',
    title: 'Another blog',
    author: 'Dee Fegh',
    url: 'about:blank',
    likes: 7,
    __v: 0,
  },
];

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs);
    expect(result).toBe(15);
  });
});

describe('favorite blog', () => {
  test('of empty list is null', () => {
    const result = listHelper.favoriteBlog([]);
    expect(result).toBe(null);
  });

  test('when list has only one blog equals the blog', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);
    expect(result).toEqual(listWithOneBlog[0]);
  });

  test('of a bigger list is correct', () => {
    const result = listHelper.favoriteBlog(listWithThreeBlogs);
    expect(result).toEqual(listWithThreeBlogs[2]);
  });
});
