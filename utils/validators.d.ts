import { helpers } from '@vuelidate/validators';

declare interface validatorName {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}

declare interface validatorPhone {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
}

declare interface validatorPassword {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}

export { validatorName, validatorPhone, validatorPassword };