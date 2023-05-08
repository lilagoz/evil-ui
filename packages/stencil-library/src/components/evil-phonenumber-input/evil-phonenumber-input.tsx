import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'evil-phonenumber-input',
  styleUrl: 'evil-phonenumber-input.scss',
  shadow: true,
})
export class EvilPhonenumberInput {
  @State() numbers: Array<string> = new Array<string>(null, '00', '000', '00', '00');
  @State() value: string;
  // @Event() valueChange: EventEmitter<string>;

  @Event({
    // eventName: 'EvilPhonenumberInputChange',
    // cancelable: true,
    composed: false,
    // bubbles: false,
  })
  change: EventEmitter<string>;

  onChangeHandler(e: any, position: number) {
    console.debug('evil-phonenumber-input onChangeHandler', e.detail, position);
    this.numbers[position] = e.detail;
    if (this.numbers.every(i => i)) {
      this.value = `${this.numbers[0]}(${this.numbers[1]})${this.numbers[2]}-${this.numbers[3]}-${this.numbers[4]}`;
      console.debug('evil-phonenumber-input valueChange will fire', this.value);
      this.change.emit(this.value);
      console.debug('evil-phonenumber-input valueChange fired', this.value);
    }
  }

  render() {
    return (
      <Host>
        <label>
          <slot></slot>
        </label>
        <number-dropdown-input itemNumber={100} itemPrefix={'+'} onChange={e => this.onChangeHandler(e, 0)}></number-dropdown-input>
        <number-dropdown-input itemNumber={100} onChange={e => this.onChangeHandler(e, 1)}></number-dropdown-input>
        <number-dropdown-input itemNumber={1000} onChange={e => this.onChangeHandler(e, 2)}></number-dropdown-input>
        <number-dropdown-input itemNumber={100} onChange={e => this.onChangeHandler(e, 3)}></number-dropdown-input>
        <number-dropdown-input itemNumber={100} onChange={e => this.onChangeHandler(e, 4)}></number-dropdown-input>
        <pre style={{ color: '#8f8' }}>phone number: {this.value}</pre>
      </Host>
    );
  }
}
