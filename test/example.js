describe('First Steps with WebdriverIO', () => {
    it('Load example Website', () => {
        browser.url('https://www.w3schools.com')
        browser.pause(10000)
        expect(browser).toHaveUrl('https://www.w3s')
    })
})