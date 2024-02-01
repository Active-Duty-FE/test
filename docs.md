### TEST

#### JEST

`npx jest --init`  jest.config.js 生成 config 文件

`npx jest --coverage` 生成测试覆盖率html   coverage/Icov-report/index.html  可以放置 ‘<script>’ 标签里

### matchers

toBe()  ---  相当于 object.is  匹配引用， 所以不适合匹配对象。 符合匹配 string 等

toEqual()  ---  不匹配引用，而匹配内容，所以适合匹配对象 

toBeNull() 

toBeUndefined()

toBeDefined()

toBeTruthy()

toBeFalsy()

not  --- 取反

toBeGreaterThan()

toBeLessThan()

toBeGreaterThanOrEqual()

toBeCloseTo()   0.1 + 0.2 toEqual() 不能通过  JS算float时，有不准的情况



#### String 相关matcher

toMatch('eee') --- 包含 也可以写正则

#### Array, Set 相关matcher

toContian('') 

#### 处理异常匹配器

expect(function).toThrow(string)  参数string 也可以是正则表达式

#### 测试异步代码

回调类型async function: 当异步函数接收回调函数的时候： 在回调函数内部需要调用 done()

返回promise类型: 

* 直接expect(fn()).resolves.toMatchObject() ---- 返回结果包含对象

* 需要 return 测试异常的时候：
  * return 异步函数
    * 需要定义 expect.assertions() --- 至少做一次expect测试
    * rejects.toThrow()
  * 用 await async 



#### HOOKS

beforeAll ---  所有测试之前调用

afterAll ---  所有测试之后调用

beforeEach --- 每个测试之前调用

afterEach --- 每个测试之后调用

作用域 --- 当前 describe 作用域下以及子集的所有test

#### 分组

describe('分组描述', () => {

​	test()

​	test()

})

describe 下的一般代码会先被执行，然后执行 HOOKS 里的代码

#### MOCK

1. 捕获函数的调用和返回结果，以及this和调用顺序

`const fn = jest.fn()`

fn.mock

* calls ---- 被调用次数，被调用时传入的参数
* instances --- 被调用时，this的指向
* invocationCallOrder --- 这个函数可能传到多个不同的方法中时，执行顺序
* results --- 被调用了几次，返回值

2. 可以让我们自由的设置返回结果

* mock 可以改变函数的内部实现  比如 axios 的返回值

3. 改变函数的内部实现

模拟异步请求时可以直接在 \_\_mocks\_\_文件下, 创建自己resolve的返回Promise的函数，在实际测试中引入创建的来做测试  jest.mock('./filename') filename必须跟实际的filename 相等。 实例: mock-deep.js

或者

 jest.config.js automock: true 的话不用在测试里写 jest.mock(./filename) ，他会直接找  \_\_mocks\_\_下的同名文件里去自动mock

异步函数文件里有同步函数，而且不想在\_\_mocks\_\_下重新定义时:

const { functionName} = jest.requireActual("./filename"); 以这种方式引入

jest.mock('./path') jest 会默认移到第一行

* 如果 ./path 里的是一个类的话，jest 会默认把类的构造函数和方法变成 jest.fn() 

#### SNAPSHOT

toMatchSnapshot()  用 u 去更新snapshot让测试通过， i 去一个一个更新snapshot让测试一个一个通过

toMatchInlineSnapshot()   生成inline snapshot

toMatchSnapshot({ 字段: expect.any(类)}) 设置面测试类型



#### DOM

因为 jest 模拟了一套 jsDOM， 所以可以在 test 里写 getElementById 等 DOM 的 API 来测试



#### TDD (TEST DRIVEN DEVELOPMENT) - RED-GREEN DEVELOPMENT

1. 编写测试用例
2. 运行测试，测试用例无法通过
3. 编写代码，使测试用例通过测试
4. 优化代码，完成开发
5. 重复上述步骤

###### 优势

1. 长期减少回归 bug
2. 代码质量变好（组织，可维护性）
3. 测试覆盖率高
4. 错误测试代码不容易出现

