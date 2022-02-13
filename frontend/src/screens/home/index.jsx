import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/atoms/button';
import { InputController, ToggleController } from 'components/atoms/fieldController';
import FieldGroup from 'components/molecules/fieldGroup/fieldGroup';

import { validationSchema, initialValues } from './validation';

const Home = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    console.log('values:', values);
  };

  useEffect(() => {
    if (watch('purchaseAmount') && watch('purchaseCostsAuto')) {
      setValue('purchaseCosts', watch('purchaseAmount') > 50000 ? watch('purchaseAmount') / 10 : 0);
    }
  }, [watch('purchaseAmount'), watch('purchaseCostsAuto')]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          hasError={errors?.purchaseCosts?.message}
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
        hasError={errors?.fonds?.message}
      />

      <FieldGroup direction="row" gap="5">
        <InputController
          id="amountBorrow"
          placeholder="Montant à emprunter"
          label="Montant à emprunter"
          name="amountBorrow"
          type="number"
          control={control}
          hasError={errors?.amountBorrow?.message}
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
        hasError={errors?.duration?.message}
      />

      <InputController
        id="interestRate"
        placeholder="Taux d'intérêt annuel"
        label="Taux d'intérêt annuel"
        name="interestRate"
        type="number"
        control={control}
        hasError={errors?.interestRate?.message}
      />
      <Button type="submit">Validation</Button>
    </form>
  );
};

export default Home;
