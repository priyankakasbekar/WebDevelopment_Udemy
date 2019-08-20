
function power(x,y){

  var res = 1;
  for(var i = 1; i <= y; i++){
    res *= x;
  }
  return res;
}


function digitsCount(num){

  var count = 0;

  while (num > 0){
    num = parseInt(num / 10);
    count = count + 1;
  }
  return count;
}

function isNarcissistic(num){
  var orig_num = num;
  var num_of_digits = digitsCount(num);
  var result = 0;
  while(num > 0){
    result += power(num%10,num_of_digits);
    num = parseInt(num/10);
  }

  if (result == orig_num){
    return true;
  }
  else{
    return false;
  }
}


function allNarcissistics(num){

  for (var i = 1;i<=num;i++){
    if (isNarcissistic(i)){
      console.log(i);
    }
  }
}
