import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleFilter = e => {
    const filterText = e.target.value;
    dispatch(setFilter(filterText));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={handleFilter} />
    </Label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
