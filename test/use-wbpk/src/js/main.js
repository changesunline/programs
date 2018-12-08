import _ from 'lodash'

import {mod} from './mod'

import foo from './foo'

import person from './person.json'

import $ from 'jquery'

import '../css/test.css'

mod()
foo.foo()
document.write(JSON.stringify(person) + '<br>')
document.write('hello webpack <br>')
$("#box").html("测试文件！！！！")