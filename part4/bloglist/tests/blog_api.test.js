const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');

beforeEach(async () => {
  await Blog.deleteMany({});

  // Populate database with example blogs
  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
});

describe('GET /api/blogs', () => {
  test('blogs are returned as json', async () =>
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/));

  test('all blogs are returned', async () => {
    const res = await api.get('/api/blogs');
    expect(res.body).toHaveLength(helper.initialBlogs.length);
  });

  test('unique identifier property is named "id", not "_id"', async () => {
    const res = await api.get('/api/blogs');
    const blog = res.body[0];
    expect(blog.id).toBeDefined();
    expect(blog._id).toBe(undefined);
  });
});

describe('POST /api/blogs', () => {
  test('creates a new blog post', async () => {
    const newBlog = {
      title: 'Towards an automated changelog workflow',
      author: 'William Woodruff',
      url: 'https://blog.yossarian.net/2020/11/05/Towards-an-automated-changelog-workflow',
      likes: 1,
    };

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const res = await api.get('/api/blogs');

    expect(res.body).toHaveLength(helper.initialBlogs.length + 1);
    expect(
      res.body.map(({ title, author, url, likes }) => ({ title, author, url, likes }))
    ).toContainEqual(newBlog);
  });
});

afterAll(() => mongoose.connection.close());
