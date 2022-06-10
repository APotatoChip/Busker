import { Directive,Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, UntypedFormGroup } from '@angular/forms';
import { rePasswordValidator } from './validators';

@Directive({
  selector: '[ngModel][appRePasswordValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      multi:true,
      useExisting:RePasswordValidatorDirective
    }
  ]
})
export class RePasswordValidatorDirective implements Validator {
  
@Input() pass?:string;

  validate(formGroup:UntypedFormGroup):ValidationErrors{
    
  let formParentControls=formGroup.parent?.controls as any;

  let arOfControls = Object.entries(formParentControls) as any;
var pass = arOfControls[2][1].value;
var rePass =arOfControls[3][1].value;

    //why the opposite way???
    if(pass === rePass){
      return {appRePasswordValidator:false};
    }
    else{
      return {appRePasswordValidator:true};
    }
  }
  

}
