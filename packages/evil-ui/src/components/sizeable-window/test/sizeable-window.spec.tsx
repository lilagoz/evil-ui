import { newSpecPage } from '@stencil/core/testing';
import { SizeableWindow } from '../sizeable-window';

describe('sizeable-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SizeableWindow],
      html: `<sizeable-window></sizeable-window>`,
    });
    expect(page.root).toEqualHtml(`
      <sizeable-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sizeable-window>
    `);
  });
});
