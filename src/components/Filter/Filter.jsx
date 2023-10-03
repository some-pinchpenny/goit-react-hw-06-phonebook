import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { changeValue, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filter}
        onChange={evt => dispatch(changeValue(evt.target.value))}
        type="text"
      />
    </FilterLabel>
  );
};
