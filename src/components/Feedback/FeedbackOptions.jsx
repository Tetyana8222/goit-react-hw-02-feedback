import React from 'react';
import PropTypes from 'prop-types';
// import options from '../../data/options.json';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  // console.log(onLeaveFeedback);
  return (
    <ButtonBox>
      {options.map(el => {
        return (
          <Button type="button" key={el} value={el} onClick={onLeaveFeedback}>
            {el}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
