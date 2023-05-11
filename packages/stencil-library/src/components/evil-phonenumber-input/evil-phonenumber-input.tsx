import { Component, Host, h, State, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'evil-phonenumber-input',
  styleUrl: 'evil-phonenumber-input.scss',
  shadow: true,
})
export class EvilPhonenumberInput {
  @State() numbers: Array<string> = new Array<string>(null, '00', '000', '00', '00');
  @State() phoneNumber: string;

  @Prop() debug?: boolean = false;

  // @Prop({ mutable: true }) value: string;
  // @Event() valueChange: EventEmitter;

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
      this.phoneNumber = `${this.numbers[0]}(${this.numbers[1]})${this.numbers[2]}-${this.numbers[3]}-${this.numbers[4]}`;
      console.debug('evil-phonenumber-input valueChange will fire', this.phoneNumber);
      this.change.emit(this.phoneNumber);
      // this.value = this.phoneNumber;
      // this.valueChange.emit(this.phoneNumber);
      console.debug('evil-phonenumber-input valueChange fired', this.phoneNumber);
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
        {!this.phoneNumber && <p>modify the country code</p>}
        {this.debug && (
          <pre style={{ color: '#8f8' }}>
            <p>evil-phonenumber-input: {this.phoneNumber}</p>
          </pre>
        )}
      </Host>
    );
  }
}
