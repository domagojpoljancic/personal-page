// Visual regression: homepage and one article.
// baseURL in playwright.config.js should be http://127.0.0.1:4000/personal-page
// Update snapshots: npx playwright test --update-snapshots
test.describe('Visual regression', () => {
  test('homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', { maxDiffPixels: 100 });
  });

  test('article page', async ({ page }) => {
    await page.goto('/2026/03/10/my-ai-journey-so-far.html');
    await expect(page).toHaveScreenshot('article-first-note.png', { maxDiffPixels: 100 });
  });
});
