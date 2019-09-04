import { displayError } from '../views/errorView';

const errorHandler = func => {
  return (...params) => {
    return func(params).catch(error => displayError(error.message));
  };
};

export default errorHandler;
