import {fillzero} from './fillzero';
export const date=(time)=>{
  var d=new Date();
  d.setTime(time);
  var year=d.getFullYear();
  var month=d.getMonth()+1;
  return `${year}年${fillzero(month)}月`;
};