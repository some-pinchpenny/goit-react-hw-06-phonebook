import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {visibleItems.map(item => (
        <li>
          <ContactsItem contact={item} />
        </li>
      ))}
    </List>
  );
};
