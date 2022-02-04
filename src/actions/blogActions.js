import axios from 'axios';

//Backend
let URL = 'http://127.0.0.1:8090/api/v1/blogs';

//URL to simulate backend locally
let jsonUrl = 'http://localhost:8000/blogs';

let dispatchActionHandler = (type, payload, dispatch) => {
  dispatch({ type, payload });
};

//Function that takes a blog and shift it into the array
const addBlog = (blog, blogs) => {
  return async (dispatch) => {
    let res = await axios.post(`${URL}/blog`, blog);
    let addedBlog = res.data.blog;
    let blogsClone = [addedBlog, ...blogs];

    if (res.status) {
      console.log('created blog res>>>', res, blogsClone);
      dispatchActionHandler('ADD_BLOG', blogsClone, dispatch);
    }
    return res;
  };
};

const deleteBlog = (id, blogs) => {
  return async (dispatch) => {
    let res = await axios.delete(`${URL}/blog/${id}`);
    if (res.status) {
      let newBlogs = blogs.filter((blog) => blog.id !== id);
      dispatchActionHandler('DELETE_BLOG', newBlogs, dispatch);
    }
    return res;
  };
};

const updateBlog = (blogToBeUpdated, blogs) => {
  let { id } = blogToBeUpdated;
  console.log('blog>>>>>>>>>>>>>>>>>>>>>>>>', blogToBeUpdated);
  return async (dispatch) => {
    let res = await axios.patch(`${URL}/blog/${id}`, blogToBeUpdated);
    let { blog } = res.data;

    if (res.status) {
      let filteredBlogs = blogs.filter(
        (blog) => blog._id === blogToBeUpdated._id
      );
      let newUpdatedBlogs = [...blogs, blogToBeUpdated];
      dispatchActionHandler('UPDATE_BLOG', [...newUpdatedBlogs], dispatch);
    }
  };
};

//Action to get blogs data
const getAllBlogs = () => {
  return async (dispatch) => {
    let res = await axios.get(`${URL}`);
    let { blogs } = res.data;

    if (res.status) {
      dispatchActionHandler('GET_BLOGS', blogs, dispatch);
    }

    return blogs;
  };
};

const getBlogById = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`${URL}/blog/${id}`);
    console.log(res);

    let { blog } = res.data;

    if (res.status) {
      dispatchActionHandler('GET_BLOG_BY_ID', blog, dispatch);
    }
    return res;
  };
};
export default { addBlog, deleteBlog, updateBlog, getAllBlogs, getBlogById };
