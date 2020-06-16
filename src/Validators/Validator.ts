import { AbstractControl, ValidatorFn } from '@angular/forms';

export function getValidatorInput(inputControl: AbstractControl): ValidatorFn{
    return (control: AbstractControl): {[key:string]: any } => {
        const input = inputControl.value
        return control.value === input ? null:{ inputMismatch: {value: control.value} }
    }
}