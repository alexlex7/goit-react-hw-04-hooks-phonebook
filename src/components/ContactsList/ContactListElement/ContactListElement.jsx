import s from './ContactListElement.module.css';
import PropTypes from 'prop-types';
function ContactsListElement({ name, number, id, onDeleteContact }) {
  return (
    <li className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactsListElement;

ContactsListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
