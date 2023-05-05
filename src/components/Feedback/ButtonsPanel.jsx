import React from 'react';
import PropTypes from 'prop-types';
import options from '../../data/options.json';
import { ButtonBox, Button } from './ButtonsPanel.styled';

export const ButtonsPanel = ({ option, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <ButtonBox>
      {options.map(el => {
        return (
          <Button key={el} type="button" value={el} onClick={onLeaveFeedback}>
            {el}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

ButtonBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
