const initialState = {
  blogs:[],
  blog:{}
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
       return { 
        ...state,
        blogs: action.payload
    }

    case 'UPDATE_BLOG':
      state = [...state.blogs, action.payload];
      return state;

    case 'DELETE_BLOG':
      return { 
        ...state,
        blogs: action.payload
    }
    case 'GET_BLOGS':

     return { 
        ...state,
        blogs: action.payload
    }
    case 'GET_BLOG_BY_ID':
      return { 
         ...state,
         blog: action.payload
     }
      
    default:
      return state;
  }
};

export default blogReducer;
