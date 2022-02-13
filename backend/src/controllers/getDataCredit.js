import getMonthlyRate from 'utils/getMonthlyInterestRate';
import getMonthlyPayment from 'utils/getMonthlyPayment';

const getDataCredit = (req, res) => {
  const {
    body: { amountBorrow, duration, interestRate },
  } = req;

  try {
    const monthlyRate = getMonthlyRate(interestRate / 100);

    const monthlyPayment = getMonthlyPayment({
      capital: amountBorrow,
      duration,
      monthlyRate: monthlyRate / 100,
    });

    let soldDebut = amountBorrow;

    const result = Array.from(Array(duration).keys())?.map(elt => {
      const rate =
        elt + 1 === duration
          ? (monthlyPayment - soldDebut).toFixed(2)
          : (soldDebut * (monthlyRate / 100))?.toFixed(2);
      const capitalRepaid = (monthlyPayment - rate)?.toFixed(2);
      const soldFinal = (soldDebut - capitalRepaid)?.toFixed(2);

      const obj = {
        monthly: monthlyPayment,
        capital: capitalRepaid,
        rate,
        soldDebut,
        soldFinal,
      };

      soldDebut = soldFinal;
      return { ...obj };
    });

    return res.status(200).json({
      ok: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      error,
    });
  }
};

export default getDataCredit;
