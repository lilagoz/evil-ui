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

  dragWindow: { screenX: number; screenY: number; cmd: string };

  log = (ev: MouseEvent) => console.log(ev.type, ev);

  moveWindow(ev: MouseEvent) {
    const dX = ev.screenX - this.dragWindow.screenX;
    const dY = ev.screenY - this.dragWindow.screenY;
    this.dragWindow = { screenX: ev.screenX, screenY: ev.screenY, cmd: this.dragWindow.cmd };
    const newParams = { ...this.windowParams };
    switch (this.dragWindow.cmd) {
      case 'move':
        newParams.left += dX;
        newParams.top += dY;
        break;
      case 'right':
        newParams.width += dX;
        break;
      case 'left':
        newParams.width -= dX;
        newParams.left += dX;
        break;
      case 'bottom':
        newParams.height += dY;
        break;
      case 'left-bottom':
        newParams.height += dY;
        newParams.width -= dX;
        newParams.left += dX;
        break;
      case 'right-bottom':
        newParams.height += dY;
        newParams.width += dX;
        break;
    }

    this.windowParams = {
      ...newParams,
    };
  }
  mouseHandler(ev: MouseEvent, cmd?: string) {
    switch (ev.type) {
      case 'mousedown':
        this.dragWindow = { screenX: ev.screenX, screenY: ev.screenY, cmd };
        // this.log(ev);
        break;
      case 'mouseup':
        this.dragWindow = null;
        // this.log(ev);
        break;
      case 'mousemove':
        if (this.dragWindow) {
          this.moveWindow(ev);
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
            <div class={'window-header'} onMouseDown={ev => this.mouseHandler(ev, 'move')}>
              <div class={'header-button red-button'}></div>
              <div class={'header-button yellow-button'}></div>
              <div class={'header-button green-button'}></div>
              <div class={'header-title'}>
                <div>{this.windowTitle}</div>
              </div>
            </div>
            <div class={'window-content'}>
              <slot></slot>
            </div>

            <div class={'window-sizer-left'} onMouseDown={ev => this.mouseHandler(ev, 'left')}></div>
            <div class={'window-sizer-right'} onMouseDown={ev => this.mouseHandler(ev, 'right')}></div>
            <div class={'window-sizer-bottom'} onMouseDown={ev => this.mouseHandler(ev, 'bottom')}></div>
            <div class={'window-sizer-left-bottom'} onMouseDown={ev => this.mouseHandler(ev, 'left-bottom')}></div>
            <div class={'window-sizer-right-bottom'} onMouseDown={ev => this.mouseHandler(ev, 'right-bottom')}></div>
          </div>
        </div>
      </Host>
    );
  }
}
