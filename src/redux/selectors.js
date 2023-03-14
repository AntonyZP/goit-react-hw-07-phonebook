export const selectContacts = state => state.contacts;
export const selectContactsFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
