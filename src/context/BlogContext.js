import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const id = state.length + 1;
      return [
        ...state,
        {
          title: `Blog Post #${id}`,
          id,
        },
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
