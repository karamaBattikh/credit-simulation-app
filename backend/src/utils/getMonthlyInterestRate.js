const getMonthlyRate = val => (((1 + val) ** (1 / 12) - 1) * 100)?.toFixed(3);

export default getMonthlyRate;
