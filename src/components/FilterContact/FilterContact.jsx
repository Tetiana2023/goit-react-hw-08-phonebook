import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { updateFilter } from 'redux/filter/filterSlice';
import TextField from '@mui/material/TextField';
import css from './FilterContact.module.css';

export const FilterContact = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const hendleFilter = event => {
  //     dispatch(updateFilter(event.target.value));
  //   };

  const filterId = nanoid();
  return (
    <div className={css.form}>
    <TextField
      htmlFor={filterId}
      id="outlined-basic"
      label="Find contacts by Name"
      variant="outlined"
      size="small"
      type="text"
      value={filter}
      name="filter"
      onChange={event => dispatch(updateFilter(event.target.value))}
    />
    </div>
  );
};
FilterContact.propType = {
  value: PropTypes.string.isRequired,
  hendleFilter: PropTypes.func.isRequired,
};
