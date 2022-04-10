import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const initialState = { name: '', number: '' };
function ContactForm({ onCreateContact }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const eventName = e.target.getAttribute('name');
    setFormData(state => ({ ...state, [eventName]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    onCreateContact(name, number);
    setFormData({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit} className={s.formContact}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={formData.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={formData.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = { onCreateContact: PropTypes.func.isRequired };

export default ContactForm;
