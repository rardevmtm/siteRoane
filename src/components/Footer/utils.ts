export const formatPhoneNumber = (value: string): string => {
  // Remove tudo que não for número
  const numbers = value.replace(/\D/g, '');
  
  // Aplica a máscara conforme o tamanho
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{2})/, '($1) ')
      .replace(/(\d{1})(\d{4})/, '$1 $2-')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
  
  return value;
};