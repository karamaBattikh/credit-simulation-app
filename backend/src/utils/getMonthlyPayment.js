const getMonthlyPayment = ({ capital, duration, monthlyRate }) =>
  parseFloat(
    (capital * monthlyRate * (1 + monthlyRate) ** duration) / ((1 + monthlyRate) ** duration - 1),
  )?.toFixed(2);

export default getMonthlyPayment;
