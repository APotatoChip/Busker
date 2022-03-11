import { AbstractControl, ValidationErrors, ValidatorFn,FormGroup } from "@angular/forms";

// export function rePasswordValidatorFactory(targetControl:AbstractControl):ValidatorFn{
//     return function rePasswordValidator(control:AbstractControl): ValidationErrors | null{
//         const areTheSame = targetControl.value === control.value;
//         return areTheSame ? null : {rePasswordValidator:true};
//     };
// }

export function rePasswordValidator(pass:string, rePass:string): ValidationErrors | null {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[pass];
        const matchingControl = formGroup.controls[rePass];
        const areTheSame = control === matchingControl;
        return areTheSame ? null : {rePasswordValidator:true};

        
    }
}

