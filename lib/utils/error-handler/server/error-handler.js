ErrorHandler = function (_error, _message, _throwError = true) {
  const createdError = new Meteor.Error(_error, Accounts._options.ambiguousErrorMessages ? "Something went wrong. Please check your credentials." : _message);

  if (typeof _error === 'object' && _error.writeErrors) {
    mongoError(createdError, _error);
  }

  if (_throwError) {
    throw createdError;
  }

  return createdError;
}

function mongoError(error, _error) {
  switch (_error.code) {
    case 11000:
      _error.writeErrors.forEach(we => {
        const s = we.err.errmsg.indexOf("{") + 2;
        const e = we.err.errmsg.lastIndexOf(":");

        error.error = 422;
        error.reason = {};
        error.reason = { errors: {} };
        error.reason.errors[we.err.errmsg.slice(s, e)] = "Bu alan benzersiz olmalı.";
      });
      break;
  }
}