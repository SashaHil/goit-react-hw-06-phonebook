import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ListItem, Name } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Name>{name}: </Name>
            <p>{number} </p>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};
