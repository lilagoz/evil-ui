import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EvilPhonenumberComponent),
  multi: true,
};

@Component({
  selector: 'lib-evil-phonenumber',
  templateUrl: './evil-phonenumber.component.html',
  styleUrls: ['./evil-phonenumber.component.css'],
  providers: [CUSTOM_INPUT_VALUE_ACCESSOR],
})
export class EvilPhonenumberComponent implements ControlValueAccessor {
  public foo: string = 'kigyo-begyo';

  _onChange: (value: any) => void = noop;
  _onTouch: () => void = noop;

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  writeValue(obj: any): void {}

  onValueChange(ev: any) {
    console.log('lib-evil-phonenumber onValueChange will fire', ev.detail);
    this._onChange(ev.detail);
    this._onTouch();
    console.log('lib-evil-phonenumber onValueChange fired');
  }
}
