import React from 'react';
import { filterContacts } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const currentFilter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const handleFilterChange = ev => {
    dispatch(filterContacts(ev.target.value.toLowerCase().trim()));
  };

  return (
    <div>
      <input
        type="text"
        value={currentFilter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
