export const generateNumbers = (quantity: number): number[] => {
  return Array.from(Array(quantity), (_, idx: number) => idx + 1);
};
