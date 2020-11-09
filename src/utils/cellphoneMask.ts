/**
 * Cellphone mask (11) 91111-1111
 * @param value Cellphone number to be masked
 */
export const cellphoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})/, '($1) ')
    .replace(/(\d{5})(\d{1})/, '$1-$2')
    .replace(/(.\d{4})\d+?$/, '$1');
};

export const validateCellphone = /\([1-9]{2}\)[ ][9]{1}[0-9]{4}[-][0-9]{4}/;
