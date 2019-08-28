export const getErrorMessage = (error = {}) => {
  if (typeof error === 'string') {
    return error;
  }

  if (error.response && error.response.data && error.response.data.error) {
    return error.response.data.error;
  }

  if (Array.isArray(error)) {
    return error;
  }

  return error.message || 'Unknown error';
};

export const getLinkForAuth = () => {
  const splitted = window.location.href.split(window.location.origin).filter(c => c);
  const slug = splitted[0].split('/').filter(c => c)[0];
  return `https://account.deliveryassociates.com/${slug}`;
};

export const blank = {};
