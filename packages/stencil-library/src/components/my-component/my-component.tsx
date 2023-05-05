import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <Host class="outer">
        <div class="inner">
          <slot name={"header"}/>
          <slot/>
          <ez-input></ez-input>
          <slot name={"footer"}/>
        </div>
      </Host>
      )
  }
}
