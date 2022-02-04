import { useState } from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux';
import AC from '../../actions/blogActions';
import { bindActionCreators } from 'redux';
import './form.scss';
const Form = () => {
  const [blog, setBlog] = useState({
    title: '',
    body: '',
    publishedAt: Date.now(),
  });
  const [submitError, setSubmitError] = useState(false);

  const dispatch = useDispatch();
  let { addBlog } = bindActionCreators(AC, dispatch);
  let blogs = useSelector((state) => state.blogs.blogs);

  let bodyLength = 1000;

  const handleTitleChange = (e) => {
    setBlog({ ...blog, title: e.target.value });
  };
  const handleBodyChange = (e) => {
    setBlog({ ...blog, body: e.target.value });
  };
  const handleSubmittingForm = () => {
    if (!blog.title || !blog.body) {
      setSubmitError(true);
    } else {
      addBlog(blog, blogs);
      //Resetting input and textarea
      setBlog({ title: '', body: '', publishedAt: Date.now() });
    }
  };

  return (
    <div className="form-container">
      <input
        className="form-container__title"
        value={blog.title}
        onChange={(e) => handleTitleChange(e)}
        type="text"
      />

      <textarea
        className="form-container__body"
        onChange={(e) => handleBodyChange(e)}
        value={blog.body}
      ></textarea>

      <span className="form-container__chars-left">
        {`${bodyLength - blog.body.length}`}characters left
      </span>
      {submitError && (
        <span className="form-container__error">
          Please add blog data correctly
        </span>
      )}
      <input
        type="submit"
        onClick={() => {
          handleSubmittingForm();
        }}
        className="form-container__submit"
      />
      <div style={{ borderTop: '1px solid black', margin: '10px 0px' }}></div>
    </div>
  );
};

export default Form;
