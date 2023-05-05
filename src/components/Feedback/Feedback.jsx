import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Section } from './Feedback.styled';
import { ButtonsPanel } from './ButtonsPanel';

class Feedback extends Component {
  // дефолтні пропси для Класу
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };
  //дефолтні проптипи для Класу, прописуються перед кастомними властивостями
  // static PropTypes = {};
  // поточне значення стану
  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.initialValueBad,
  };

  onLeaveFeedback = ev => {
    if (ev.target.textContent === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (ev.target.textContent === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (ev.target.textContent === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };
  // incrementGood = () => {
  //   this.setState(prevstate => {
  //     return { good: prevstate.good + 1 };
  //   });
  // };

  // incrementNeutral = () => {
  //   this.setState(prevstate => {
  //     return { neutral: prevstate.neutral + 1 };
  //   });
  // };

  // incrementBad = () => {
  //   this.setState(prevstate => {
  //     return { bad: prevstate.bad + 1 };
  //   });
  // };

  render() {
    return (
      <Section>
        <h2 className="feedback-title">Please leave feedback</h2>
        <ButtonsPanel />
      </Section>
    );
  }
}

export default Feedback;
