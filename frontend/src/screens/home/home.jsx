import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/atoms/button';
import { InputController, ToggleController } from 'components/atoms/fieldController';
import FieldGroup from 'components/molecules/fieldGroup/fieldGroup';
import Table from 'components/molecules/table';

import styles from './home.module.scss'
import { validationSchema, initialValues } from './validation';

const Home = () => {
  const [list, setList] = useState([]); 

  const {
    control,
    formState: {errors, isDirty },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/credit-data`, {
        amountBorrow: values?.amountBorrow,
        duration: values?.duration,
        interestRate: values?.interestRate,
      })
      .then((response) => {
        setList(response?.data?.data);
      });
  };

  useEffect(() => {
    if (watch('purchaseAmount') && watch('purchaseCostsAuto')) {
      setValue('purchaseCosts', watch('purchaseAmount') > 50000 ? watch('purchaseAmount') / 10 : 0);
    }
  }, [watch('purchaseAmount'), watch('purchaseCostsAuto')]);

  useEffect(() => {
    if (watch('amountBorrow') && !watch('amountBorrowAuto')) {
      const result =
        Number(watch('purchaseAmount')) +
        Number(watch('purchaseCosts')) -
        Number(watch('amountBorrow')) / 1.02;
      setValue('fonds', result?.toFixed(2));
    }
  }, [watch('amountBorrow'), watch('amountBorrowAuto')]);

  useEffect(() => {
    if (watch('fonds') && watch('purchaseCosts') && watch('purchaseAmount')) {
      const result =
        (Number(watch('purchaseAmount')) +
          Number(watch('purchaseCosts')) -
          Number(watch('fonds'))) *
        1.02;
      setValue('amountBorrow', result.toFixed(2));
    }
  }, [watch('fonds'), watch('purchaseCosts'), watch('purchaseAmount')]);

  useEffect(() => {
    if (isDirty && list.length > 0) {
     setList([])
    }
  }, [isDirty]);

  
  return (
    <>
      <form className={styles.home} onSubmit={handleSubmit(onSubmit)}>
        <InputController
          id="purchaseAmount"
          placeholder="Montant d'achat"
          label="Montant d'achat"
          name="purchaseAmount"
          type="number"
          control={control}
          hasError={errors?.purchaseAmount?.message}
        />

        <FieldGroup direction="row" gap="5">
          <InputController
            id="purchaseCosts"
            placeholder="Frait d'achat"
            label="Frait d'achat"
            name="purchaseCosts"
            type="number"
            control={control}
            hasError={errors?.purchaseCosts && errors?.purchaseCosts?.message}
            disabled={watch('purchaseCostsAuto')}
          />

          <ToggleController label="auto" name="purchaseCostsAuto" control={control} />
        </FieldGroup>

        <InputController
          id="fonds"
          placeholder="Fonds propres"
          label="Fonds propres"
          name="fonds"
          type="number"
          control={control}
          hasError={errors?.fonds && errors?.fonds?.message}
        />

        <FieldGroup direction="row" gap="5">
          <InputController
            id="amountBorrow"
            placeholder="Montant à emprunter"
            label="Montant à emprunter"
            name="amountBorrow"
            type="number"
            control={control}
            disabled={watch('amountBorrowAuto')}
            hasError={errors?.amountBorrow && errors?.amountBorrow?.message}
          />
          <ToggleController label="auto" name="amountBorrowAuto" control={control} />
        </FieldGroup>

        <InputController
          id="duration"
          placeholder="Durée"
          label="Durée"
          name="duration"
          type="number"
          control={control}
          hasError={errors?.duration && errors?.duration?.message}
        />

        <InputController
          id="interestRate"
          placeholder="Taux d'intérêt annuel"
          label="Taux d'intérêt annuel"
          name="interestRate"
          type="number"
          control={control}
          hasError={errors?.interestRate && errors?.interestRate?.message}
        />
        <Button type="submit">Validation</Button>
      </form>
      {list?.length >0 && <Table key={list.length} list={list} />}
    </>
  );
};

export default Home;
