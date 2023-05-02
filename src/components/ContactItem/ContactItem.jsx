import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
// import Button from '@mui/material/Button';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  // const { name, number, id } = contact;

  const onClick = ()=> {
    dispatch(deleteContact(id))
  }
  return (
    <>
      <div className={css.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={onClick}
          // onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
