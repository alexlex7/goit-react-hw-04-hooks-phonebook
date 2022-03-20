import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ handleChange, filter }) {
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input type="text" value={filter} name="filter" onChange={handleChange} />
    </label>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
