import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sizeable-window',
  styleUrl: 'sizeable-window.scss',
  shadow: true,
})
export class SizeableWindow {
  @Prop() windowTitle: string = undefined;

  @State() windowParams: {
    top: number;
    left: number;
    width: number;
    height: number;
  } = { width: 640, height: 480, top: 200, left: 200 };

  dragWindow: { screenX: number; screenY: number };

  log = (ev: MouseEvent) => console.log(ev.type, ev);
  mouseHandler(ev: MouseEvent) {
    switch (ev.type) {
      case 'mousedown':
        this.dragWindow = { screenX: ev.screenX, screenY: ev.screenY };
        // this.log(ev);
        break;
      case 'mouseup':
        this.dragWindow = null;
        // this.log(ev);
        break;
      case 'mousemove':
        if (this.dragWindow) {
          const dX = ev.screenX - this.dragWindow.screenX;
          const dY = ev.screenY - this.dragWindow.screenY;
          this.dragWindow = { screenX: ev.screenX, screenY: ev.screenY };

          this.windowParams = {
            ...this.windowParams,
            left: this.windowParams.left + dX,
            top: this.windowParams.top + dY,
          };
        }

        break;
      default:
        this.log(ev);
    }
  }

  render() {
    return (
      <Host>
        <div class={'window-manager'} onMouseMove={ev => this.mouseHandler(ev)} onMouseUp={ev => this.mouseHandler(ev)}>
          <div
            class={'sizeable-window'}
            style={{
              top: `${this.windowParams.top}px`,
              left: `${this.windowParams.left}px`,
              width: `${this.windowParams.width}px`,
              height: `${this.windowParams.height}px`,
            }}
          >
            <div class={'header'} onMouseDown={ev => this.mouseHandler(ev)}>
              <div class={'header-button red-button'}></div>
              <div class={'header-button yellow-button'}></div>
              <div class={'header-button green-button'}></div>
              <div class={'header-title'}>
                <div>{this.windowTitle}</div>
              </div>
            </div>

            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
