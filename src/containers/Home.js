import BlogList from '../components/blog-list/BlogList';
import Form from '../components/form/Form';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import AC from '../actions/blogActions';

const Home = () => {
  const dispatch = useDispatch();
  let blogs = useSelector((state) => state.blogs.blogs);
  let { getAllBlogs } = bindActionCreators(AC, dispatch);

  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <>
      <Form />
      <BlogList blogs={blogs} />
    </>
  );
};

export default Home;
