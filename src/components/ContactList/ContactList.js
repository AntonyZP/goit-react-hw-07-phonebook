import { useSelector } from 'react-redux';
import { getContacts, getContactsFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getContactsFilter).toLowerCase().trim();

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue);
  });

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (        
          <ContactListItem 
          key={id}
          id={id}
          name={name} 
          number={number} 
         />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string
};
