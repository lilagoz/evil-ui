import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'foo-bar',
  styleUrl: 'foo-bar.scss',
  shadow: true,
})
export class FooBar {
  render() {
    return (
      <Host>
        <h1>This is foo bar 💨 🍫</h1>
        <slot></slot>
      </Host>
    );
  }
}
