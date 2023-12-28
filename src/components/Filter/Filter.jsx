import React from 'react';
import { Label, Field } from './Filter.styled';
import PropTypes from 'prop-types';
import { MdPersonSearch } from 'react-icons/md';
import { LableWrapper } from 'components/Form/Form.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      <LableWrapper>
        <MdPersonSearch size="24" />
        Find contacts by name
      </LableWrapper>

      <Field
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="search"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
