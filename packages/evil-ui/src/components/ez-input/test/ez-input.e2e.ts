import { newE2EPage } from '@stencil/core/testing';

describe('ez-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ez-input></ez-input>');

    const element = await page.find('ez-input');
    expect(element).toHaveClass('hydrated');
  });
});
