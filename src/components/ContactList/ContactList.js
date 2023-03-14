import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase().trim();

  const visibleContacts = contacts.items
    .filter(contact => {
      return contact.name.toLowerCase().includes(filterValue);
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
