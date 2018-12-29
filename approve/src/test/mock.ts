import * as Mock from 'mockjs';
import { BASE_URL } from '../config';

let Random = Mock.Random;

let login = `${BASE_URL}/login`;
Mock.mock(login, 'post', {
  msg: 'success',
  obj: {
    tokenId: Math.random().toString(22).substr(2)
  }
});
//登录
let getMe = `${BASE_URL}/personInfo`;
Mock.mock(getMe, 'get', {
  msg: 'success',
  obj: {
    'personId': 1,
    'name': 'admin',
    // 'photoBlob': '',
  }
});

// 登录
let selefInfo = {
  'personId': 1,
};
let personInfoStatement = new RegExp(`${BASE_URL}/personInfo/statement`);
Mock.mock(personInfoStatement, 'get', function() {
  return {
    msg: 'success',
    obj: selefInfo
  }
});
Mock.mock(personInfoStatement, 'post', function(req) {
  let body = JSON.parse(req.body);
  for(let key in body) {
    selefInfo[key] = body[key];
  }
  return {
    msg: 'success',
    obj: selefInfo
  }
});


let todoData = new RegExp(`${BASE_URL}/todo/getTodoList`);
const todoList = ['费用报销单','交通报销单','活动报销单','办公报销单','饮食报销']
const name = ['小丽','小霞','小东','哆啦','大雄']
Mock.mock(todoData, 'get', {
    msg: 'success',
    'obj|5':[{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'todoList|+1': todoList,
      'title|+1':name,
      'content': function() {
        return Random.cparagraph(2);
      },
      'publishTime':function (){
        return Random.datetime('yyyy-MM-dd HH:mm')
      },
      'likeCounts':function(){
        return Random.natural(1,30);
      },
      'commentCount':function(){
        return Random.natural(1,20);
      }
    }]
  }
);

export {};
