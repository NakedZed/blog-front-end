import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './index.scss';
import AC from '../../actions/blogActions';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';

//Modal shows a msg and DONE btn
export function EditModal({ isOpen, toggleModal, selectedBlog }) {
  const dispatch = useDispatch();
  const [submitError, setSubmitError] = useState(false);
  let { updateBlog, getAllBlogs } = bindActionCreators(AC, dispatch);
  let blogs = useSelector((state) => state.blogs.blogs);

  const handleClose = () => {
    toggleModal();
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#E5E5E5',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    background: 'white',
    border: 'none !important',
    outline: 'none',
  };

  const [blog, setBlog] = useState({
    title: '',
    body: '',
    publishedAt: Date.now(),
  });

  useEffect(() => {
    setBlog(selectedBlog);
  }, []);

  const handleTitleChange = (e) => {
    setBlog({ ...blog, title: e.target.value });
  };
  const handleBodyChange = (e) => {
    setBlog({ ...blog, body: e.target.value });
  };
  const handleUpdateBlog = async () => {
    if (!blog.title || !blog.body) {
      setSubmitError(true);
    } else {
      await updateBlog(blog, blogs);
      await getAllBlogs();
    }
  };

  return (
    <div className="main">
      <Modal
        open={isOpen}
        aria-describedby="modal-modal-description"
        style={{ background: 'transparent' }}
        className="main__modal"
      >
        <Box sx={style} className="main__modal__action-taken-box">
          <h3 className="main__modal__action-taken-box__header">Edit Blog</h3>
          <input
            value={blog.title}
            onChange={(e) => handleTitleChange(e)}
          ></input>
          <textarea
            value={blog.body}
            onChange={(e) => handleBodyChange(e)}
            className="main__modal__action-taken-box__body"
          ></textarea>
          {submitError && (
            <span className="form-container__error">
              Please add blog data correctly!
            </span>
          )}
          <div className="main__modal__action-taken-box__controlls">
            <button onClick={() => handleUpdateBlog()}>Save</button>
            <button onClick={() => handleClose()}>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
