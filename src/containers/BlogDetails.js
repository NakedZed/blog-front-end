import { useParams } from 'react-router-dom';
import '../styles/blog.scss';
import { Link } from 'react-router-dom';
import AC from '../actions/blogActions';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const BlogDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let blog = useSelector((state) => state.blogs.blog);

  let { getBlogById } = bindActionCreators(AC, dispatch);
  useEffect(() => {
    getBlogById(id);
  }, []);

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      {
        <div className="blog-container">
          <h1 className="blog-container__title">{blog.title}</h1>
          <p className="blog-container__body">{blog.body}</p>
          <p>{blog.publishedAt?.split('T')[0]}</p>
        </div>
      }
    </>
  );
};

export default BlogDetails;
