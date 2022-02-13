import * as yup from 'yup';

export const validationSchema = yup
  .object()
  .shape({
    amountBorrow: yup.number().required(),
    duration: yup.number().required(),
    fonds: yup.number().required(),
    interestRate: yup.number().required(),
    purchaseAmount: yup.number().required(),
    purchaseCosts: yup.number().required(),
  })
  .required();

export const initialValues = {
  amountBorrow: '',
  amountBorrowAuto: true,
  duration: '',
  fonds: '',
  interestRate: '',
  purchaseAmount: '',
  purchaseCosts: '',
  purchaseCostsAuto: true,
};
