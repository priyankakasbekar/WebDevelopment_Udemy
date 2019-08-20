function toArray(num)
{
  var res = [];
  while (num > 0)
  {
    item = num % 10;
    num = parseInt(num/10);
    res.push(item);
  }
  return res.reverse();
}

function sumNeighbors(a)
{
  res = [];

  for(var i = 0; i < a.length; i++)
  {
    if (i == 0)
    {
      res.push(a[i] + a[i+1]);
    }
    else if (i == a.length-1)
    {
      res.push(a[i-1] + a[i]);
    }
    else
    {
      res.push(a[i-1] + a[i] + a[i+1]);
    }
  }
  return res;
}

function splitEven(a)
{
  var res = a.filter(function(item,index){return index % 2 == 0;});
  res.sort(compare_asc);
  return res;
}

function compare_asc(val1,val2)
{
  if (val1 > val2)
  {
    return 1;
  }
  else if (val1 < val2)
  {
    return -1;
  }
  return 0;
}

function splitOdd(a)
{
  var res = a.filter(function(item,index){return index % 2 == 1;});
  res.sort(compare_dsc);
  return res;
}

function compare_dsc(val1,val2)
{
  if (val1 < val2)
  {
    return 1;
  }
  else if (val1 > val2)
  {
    return -1;
  }
  return 0;
}

function splitEvenOdd(a)
{
  res = [];
  var j = 0;
  var k = 0;
  even_ele = splitEven(a);
  odd_ele = splitOdd(a);

  for (var i = 0; i < a.length; i++)
  {
    if (i%2 == 0)
    {
      res.push(even_ele[j]);
      j += 1;
    }
    else{
      res.push(odd_ele[k]);
      k += 1;
    }
  }
  return res;
}
