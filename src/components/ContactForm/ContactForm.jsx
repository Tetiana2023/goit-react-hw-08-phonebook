import { nanoid } from 'nanoid';
import { useState } from 'react';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  //  const isContactExist = contacts.find(
  //   contact => contact.name.toLowerCase() === name.toLowerCase()
  // );

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.info(`name: ${name} is already in contacts`);
      reset();
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      Notiflix.Notify.info(`number: ${number} is already in contacts`);
      reset();
      return;
    }
    //  isContactExist
    // ? alert(`${name} is alreadi in contacts`)
    dispatch(addContact({ name, number, id: nanoid() }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        htmlFor={nameId}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      />

      <TextField
        htmlFor={numberId}
        id="outlined-basic"
        label="Number"
        variant="outlined"
        size="small"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />

      <Button className={css.formbtn} type="submit">
        Add contact
      </Button>
    </form>
  );
};
