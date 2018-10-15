const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = validateCommentInput = data => {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 2, max: 300 })) {
    errors.text = 'Comment must be between 2 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
