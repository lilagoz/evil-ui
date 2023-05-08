import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'number-dropdown-input',
  styleUrl: 'number-dropdown-input.scss',
  shadow: true,
})
export class NumberDropdownInput {
  @Prop() itemNumber: number;
  @Prop() itemPrefix: string = '';
  @Prop({ mutable: true }) value: string;
  @Event({
    // eventName: 'NumberDropdownInputChange',
    // cancelable: true,
    composed: false,
    // bubbles: false,
  })
  change: EventEmitter<string>;

  @State() items: string[];

  componentWillLoad() {
    const numbers: string[] = [];
    const itemNumberDigits = `${this.itemNumber}`.length - 1;
    for (let i = 0; i < this.itemNumber ?? 0; i++) {
      const s = `000${i}`;
      numbers[i] = this.itemPrefix + s.substring(s.length - itemNumberDigits);
    }
    this.items = [...numbers];
  }
  onChangeHandler(value: string) {
    this.value = value;
    console.debug('number-dropdown-input onChangeHandler will fire');
    this.change.emit(value);
    console.debug('number-dropdown-input onChangeHandler fired');
  }
  render() {
    return (
      <Host>
        {this.items && (
          <select onChange={(e: any) => this.onChangeHandler(e.target.value)}>
            {this.items.map(item => (
              <option>{item}</option>
            ))}
          </select>
        )}
      </Host>
    );
  }
}
