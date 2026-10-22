function solution(str){
  const res = [];
  for (let i = 0; i < str.length; i += 2) {
    res.push(str.substring(i, i + 2).padEnd(2, '_'));
  }
  return res;
}