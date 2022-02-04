import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AC from '../../actions/blogActions';
import { bindActionCreators } from 'redux';
import '../../styles/blog.scss';

import { EditModal } from '../edit-modal/EditModal';
const BlogCard = ({ title, id, publishedAt, body }) => {
  const dispatch = useDispatch();
  let blogs = useSelector((state) => state.blogs.blogs);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  let { deleteBlog, getAllBlogs } = bindActionCreators(AC, dispatch);

  let selectedBlog = { title, id, publishedAt, body };

  const handleDeleteBlog = async (id) => {
    if (confirm('Are you sure you want to proceed?')) {
      await deleteBlog(id, blogs);
      await getAllBlogs();
    } else {
      return;
    }
  };

  const handleSeeMore = () => {
    return (
      <div className="blog-content">
        {body.length > 400 ? (
          <div>
            {`${body.substring(0, 400)}...`}
            <Link to={`/${id}`}>Read more</Link>
          </div>
        ) : (
          <p>{body}</p>
        )}
      </div>
    );
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="blog-container">
      <Link to={`/${id}`}>
        <h1 className="blog-container__title">{title}</h1>
      </Link>

      <p>{publishedAt.split('T')[0]}</p>
      {handleSeeMore()}
      <div className="blog-container__controls">
        <button
          className="blog-container__controls__edit"
          onClick={() => setIsOpen(true)}
        >
          edit
        </button>
        <button
          onClick={() => handleDeleteBlog(id)}
          className="blog-container__controls__delete"
        >
          delete
        </button>
      </div>

      {isOpen ? (
        <EditModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          selectedBlog={selectedBlog}
        />
      ) : null}
    </div>
  );
};

export default BlogCard;
