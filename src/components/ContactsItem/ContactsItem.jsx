import { useDispatch } from 'react-redux';
import { Contact, ContactText, DeleteBtn } from './ContactsItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Contact key={contact.id}>
      <ContactText>{contact.name}</ContactText>
      <ContactText>{contact.number}</ContactText>
      <DeleteBtn
        onClick={() => dispatch(deleteContact(contact.id))}
        type="button"
      >
        Delete
      </DeleteBtn>
    </Contact>
  );
};
