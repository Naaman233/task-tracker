import { AbstractControl, ValidatorFn } from '@angular/forms';

export function getValidatorInput(inputControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = inputControl.value
        return control.value === input ? null : { inputMismatch: { value: control.value } }
    }
}

export const VALIDATION_IDS = {
    required: 'character-required-msg',
    
}

export function getValidationMsg(field: string, validationId: string): string {
    const errorMessages = {
        [VALIDATION_IDS.required]: `${field} is a required field`,
        'character-minlength-msg': `${field} must have more than one character`,
        'character-maxlength-msg': `${field} must have a maximuim of thirty characters`,
        'email-minlength-msg': `${field} must have a minimuim of thirty characters`,
        'email-maxlength-msg': `${field} must have a maximuim of sixty charcaters`
    }
    return errorMessages[validationId]
}