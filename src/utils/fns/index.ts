export const generateNumbers = (quantity: number): number[] => {
  return Array.from(Array(quantity), (_, idx: number) => idx + 1);
};

export const formatPhoneNum = (value: string, previousValue: string) => {
  // return nothing if no value
  if (!value) return value;

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    // returns: "x", "xx", "xxx"
    if (cvLength < 4) return currentValue;

    // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
    // if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    if (cvLength < 7) return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`;

    // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
    // return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    return `${currentValue.slice(0, 3)}-${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
  }
};

export const formatDateOfBirth = (value: string, previousValue: string) => {
  if (!value) return value;

  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 2) return currentValue;
    if (cvLength < 4) return `${currentValue.slice(0, 2)}/${currentValue.slice(2)}`;
    return `${currentValue.slice(0, 2)}/${currentValue.slice(2, 4)}/${currentValue.slice(4, 8)}`;
  }
};
