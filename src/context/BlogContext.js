import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) =>
        blogPost.id !== action.payload.id ? blogPost : action.payload,
      );
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return () => {
    jsonServer
      .get('/blogposts')
      .then((res) => dispatch({ type: 'get_blogposts', payload: res.data }))
      .catch((e) => console.log(e));
  };
};

const addBlogPost = () => {
  return (title, content, callback) => {
    jsonServer
      .post('/blogposts', { title, content })
      .then(() => {
        if (callback) {
          callback();
        }
      })
      .catch((e) => console.log(e));
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    jsonServer
      .delete(`/blogposts/${id}`)
      .then(() => {
        dispatch({ type: 'delete_blogpost', payload: id });
      })
      .catch((e) => console.log(e));
  };
};

const editBlogPost = () => {
  return ({ id, title, content }, callback) => {
    jsonServer
      .put(`/blogposts/${id}`, { title, content })
      .then(() => {
        if (callback) {
          callback();
        }
      })
      .catch((e) => console.log(e));
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  [],
);
