import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle, Layout, Title } from './Layout';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <Title>Phonebook</Title>
      <AddForm />
      {contacts.length !== 0 && (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactsList />
        </>
      )}
      <GlobalStyle />
    </Layout>
  );
};
