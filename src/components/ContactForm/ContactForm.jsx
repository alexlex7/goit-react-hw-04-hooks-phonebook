import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
const initialState = { name: '', number: '' };
class ContactForm extends Component {
  static propTypes = {
    onCreateContact: PropTypes.func.isRequired,
  };
  state = {
    ...initialState,
  };

  handleChange = e => {
    const eventName = e.target.getAttribute('name');
    this.setState({ [eventName]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onCreateContact } = this.props;
    const { name, number } = this.state;
    onCreateContact(name, number);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.formContact}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
