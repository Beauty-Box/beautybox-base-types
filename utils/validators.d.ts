import { helpers } from '@vuelidate/validators';

 interface IValidatorName {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}

 interface IValidatorPhone {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
}

 interface IValidatorPassword {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}

declare const validatorName: IValidatorName;
declare const validatorPhone: IValidatorPhone;
declare const validatorPassword: IValidatorPassword;


export { validatorName, validatorPhone, validatorPassword };