var loadpage = function()
{
  var button1 = document.getElementById("ConvtToUSD");
  var button2 = document.getElementById("ConvtToEURO");

  var ratio = document.getElementById("EuroValue");
  ratio.innerHTML = 0.882;

  button1.addEventListener("click",converttodollars);
  button2.addEventListener("click",converttoeuro);
}

var converttodollars = function(e)
{
  eurobox = document.getElementById("EUR");
  euroboxtxt = parseFloat(eurobox.value);
  var ratio = document.getElementById("EuroValue");
  convrate = ratio.innerHTML

  dollarbox = document.getElementById("USD");
  dollarbox.value = euroboxtxt/convrate;
}

var converttoeuro = function(e)
{
  dollarbox = document.getElementById("USD");
  dollarboxtxt = parseFloat(dollarbox.value);
  var ratio = document.getElementById("EuroValue");
  convrate = ratio.innerHTML

  dollarbox = document.getElementById("EUR");
  dollarbox.value = convrate * dollarboxtxt;
}
