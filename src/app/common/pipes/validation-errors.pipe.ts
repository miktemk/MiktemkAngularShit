import { PipeTransform, Pipe } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Pipe({name: 'ValidationFirstError'})
export class ValidationFirstErrorPipe implements PipeTransform {

  transform(errors:ValidationErrors, fieldName:string, defaultErrorMessage:string): string {
    for (const key in errors) {
      // NOTE: will return the first error
      var error = errors[key];
      if (key == 'required')
        return `${fieldName} is required.`;
      if (key == 'maxlength')
        return `${fieldName} cannot be more than ${error.requiredLength} characters long.`;
      if (key == 'minlength')
        return `${fieldName} must be at least ${error.requiredLength} characters long.`;
      if (key == 'email')
        return `Invalid email address (e.g. abc@mail.com)`;
    }
    return defaultErrorMessage || 'Invalid input';
  }
}
