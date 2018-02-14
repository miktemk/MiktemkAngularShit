import {FormBuilder, FormGroup} from "@angular/forms";


export class GenericReactiveForm<TData> {

  private _formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    controlsConfig: { [key in keyof TData]: any; }, //LESSON: we constraint for Form initializer to have the same keys as out TData
    extra?: { [key in keyof TData]: any; } | null
  ) {

    this._formGroup = formBuilder.group(controlsConfig, extra);

    return this;
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public setValue(
    value: TData,
    options?: { onlySelf?: boolean; emitEvent?: boolean; }
  ) {
    this.formGroup.setValue(value, options);
  }

  public getValue():TData{
    return this.formGroup.value as TData;
  }

}

