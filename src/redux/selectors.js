// const selectContacts = state => state.contacts.queries.getContacts.data;

const selectLoading = state => state.contacts.isLoading;

const selectByFilter = state => state.filter.filter;

const selectTheme = state => state.theme.darkTheme;

const selectError = state => state.contacts.error;

export {selectByFilter, selectLoading, selectError, selectTheme};