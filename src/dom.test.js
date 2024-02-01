/**
 * @jest-environment jsdom
 */

import $ from 'jquery'
import { appendBody } from "./dom";
test('append body', () => {
    appendBody()
    expect($('body').find('div').length).toBe(1)
})