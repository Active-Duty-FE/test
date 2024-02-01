import Util from './util'

let util = null;
beforeAll(() => {
    util = new Util(3, 4)
})
test('add function', () => {
    const res = util.add()
    expect(res).toBe(7)
})

test('multi function', () => {
    const res = util.multi()
    expect(res).toBe(12)
})