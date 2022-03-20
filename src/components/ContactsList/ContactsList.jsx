import s from './ContactsList.module.css';
import ContactsListElement from './ContactListElement';
import PropTypes from 'prop-types';

function ContactsList({ contacts, filter, onDeleteContact }) {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListElement
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
