import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import {
  ContactWrapper,
  ContactNumber,
  ContactName,
  DeleteButton,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <ContactWrapper key={id}>
      <ContactName>
        {name}
        <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactWrapper>
  );
};
