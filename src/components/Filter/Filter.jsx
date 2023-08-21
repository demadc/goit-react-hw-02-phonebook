import React from 'react';
import {} from './Filter.styled';
import { Label, Field } from './Filter.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label htmlFor={idFilter}>
      Find contacts by name
      <Field id={idFilter()} type="text" value={value} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
