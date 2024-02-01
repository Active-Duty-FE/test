/**
 * 只关注 util 的使用与否，不关注 util 内部实现的对错时，用 jest.mock('./path')
 * 当 ./path 里的是一个 Class 时，jest.mock() 会把 Class 的构造函数和方法用 jest.fn() 模拟
 */

jest.mock('./util.js')

/**
 * 或者在 __mocks__ 下创建 util.js 并且导出，对模拟函数做进一步的设置
 * 
 * const Util = jest.fn() 
 * Util.prototype.add = jest.fn(() => {
 *  console.log('做进一步的操作')
 * })
 * Util.prototype.multi = jest.fn()
 * export default Util
 * 
 */ 
import Util from "./util"
import { useUtil } from "./use-util"

test('expect functions just have been called', () => {
    useUtil()
    expect(Util).toHaveBeenCalled()
    expect(Util.mock.instances[0].add).toHaveBeenCalled()
    expect(Util.mock.instances[0].multi).toHaveBeenCalled()
})