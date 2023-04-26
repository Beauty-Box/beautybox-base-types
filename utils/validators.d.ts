import { helpers } from '@vuelidate/validators';

export interface validatorName {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}

export interface validatorPhone {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
}

export interface validatorPassword {
    required: ReturnType<typeof helpers.withMessage>;
    minLength: ReturnType<typeof helpers.withMessage>;
    maxLength: ReturnType<typeof helpers.withMessage>;
}