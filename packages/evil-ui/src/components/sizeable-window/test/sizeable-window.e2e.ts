import { newE2EPage } from '@stencil/core/testing';

describe('sizeable-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sizeable-window></sizeable-window>');

    const element = await page.find('sizeable-window');
    expect(element).toHaveClass('hydrated');
  });
});
