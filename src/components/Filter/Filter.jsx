import React from 'react';
import { Label, Field } from './Filter.styled';
import PropTypes from 'prop-types';
import { MdPersonSearch } from 'react-icons/md';
import { LabelWrapper } from 'components/Form/Form.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      <LabelWrapper>
        <MdPersonSearch size="24" />
        Find contacts by name
      </LabelWrapper>

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
