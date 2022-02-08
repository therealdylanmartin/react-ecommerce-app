import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabelContainer } from './form-input.styles';

const FormInput = ({ id, handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer id={id} onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabelContainer htmlFor={id} className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabelContainer>
    ) : null}
  </GroupContainer>
)

export default FormInput;