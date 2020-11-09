/**
 * RG Mask 11.111.111
 * @param value RG number to be masked
 */
export const rgMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})\d+?$/, '$1');
};

export const validateRg = /[0-9]{2}[\.][0-9]{3}[\.][0-9]{3}/;
