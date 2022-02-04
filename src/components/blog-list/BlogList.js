import Blog from '../blog-card/BlogCard';
import { useSelector, useDispatch } from 'react-redux';
import AC from '../../actions/blogActions';
import { bindActionCreators } from 'redux';

const BlogList = ({ blogs }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      {blogs &&
        blogs.map((blog, i) => {
          return (
            <Blog
              title={blog.title}
              body={blog.body}
              id={blog._id}
              publishedAt={blog.publishedAt}
              key={i}
            />
          );
        })}
    </div>
  );
};

export default BlogList;
