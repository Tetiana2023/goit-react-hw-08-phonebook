import React from 'react';
// import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList'
import { FilterContact } from 'components/FilterContact/FilterContact';
// import {Loader} from './Loader/Loader';
import { Section } from 'components/Section/Section';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';

// import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div >
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error && <p>Loading...</p> } 
      {contacts.length > 0 && (
        <Section title="Contacts">
          <FilterContact />
          <ContactList/>
         
        </Section>
      )}
    </div>
  );
};
