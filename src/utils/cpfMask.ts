/**
 * CPF Mask 111.111.111-11
 * @param value CPF number to be masked
 */
export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const validateCpf = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}/;
