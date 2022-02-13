/* eslint-disable sonarjs/no-duplicate-string */
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  amountBorrow: yup.number('should be number').required('is required'),
  duration: yup.number('should be number').required('is required'),
  fonds: yup.number('should be number').required('is required'),
  interestRate: yup.number('should be number').required('is required'),
  purchaseAmount: yup.number('should be number').required('is required'),
  purchaseCosts: yup.number('should be number').required('is required'),
});

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
