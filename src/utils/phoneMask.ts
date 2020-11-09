/**
 * Phone mask (11) 1111-1111
 * @param value Phone number to be masked
 */
export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})/, '($1) ')
    .replace(/(\d{4})(\d{1})/, '$1-$2')
    .replace(/(.\d{4})\d+?$/, '$1');
};

export const validatePhone = /\([1-9]{2}\)[ ][0-9]{4}[-][0-9]{4}/;
