import { newSpecPage } from '@stencil/core/testing';
import { EzInput } from '../ez-input';

describe('ez-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EzInput],
      html: `<ez-input></ez-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ez-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ez-input>
    `);
  });
});
