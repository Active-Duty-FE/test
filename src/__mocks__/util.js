
const Util = jest.fn()
Util.prototype.add = jest.fn(() => {
    console.log('add');
})
Util.prototype.multi = jest.fn(() => {
    console.log('multi');
})
export default Util