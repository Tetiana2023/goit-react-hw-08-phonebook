import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.phonebook.items;
export const selectError = state => state.phonebook.error;
export const selectIsLoading = state => state.phonebook.isLoading;

export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector (
    [selectContacts, selectFilter], (contacts, filter )=> contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
)
)
