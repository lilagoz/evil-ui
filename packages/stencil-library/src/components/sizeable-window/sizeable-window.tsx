import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sizeable-window',
  styleUrl: 'sizeable-window.scss',
  shadow: true,
})
export class SizeableWindow {
  @Prop() windowTitle: string = undefined;

  render() {
    return (
      <Host style={{ width: '640px', height: '480px', top: 'calc(50vh - 240px)', left: 'calc(50vw - 320px)' }}>
        <div class={'header'}>
          <div class={'header-button red-button'}></div>
          <div class={'header-button yellow-button'}></div>
          <div class={'header-button green-button'}></div>
          <div class={'header-title'}>
            <div>{this.windowTitle}</div>
          </div>
        </div>

        <slot></slot>
      </Host>
    );
  }
}
