import style from './FeedbackOptions.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={style.feedback}>
        <h1 className={style.feedback_title}>Please leave feedback!</h1>
        <div className={style.feedback_buttons}>
          {this.props.options.map(btn => (
            <button
              className={style.feedback_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedBack(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default FeedbackOptions;
