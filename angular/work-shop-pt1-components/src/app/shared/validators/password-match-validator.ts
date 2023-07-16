import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPassValidator(
    pass1control: string, 
    pass2control: string
    ): ValidatorFn{
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(pass1control);
        const pass2 = group.get(pass2control);

        return pass1?.value === pass2?.value ? null : { matchPassValidator: true }
    }
}
