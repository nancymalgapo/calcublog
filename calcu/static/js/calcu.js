var last = 0;
var opera = '';
var reset=true;
var lastAns = 0;
function WRITE(x)
{
	var ans = document.form.ans;
	if(reset||ans.value=="0")
	{
		ans.value = x;
		reset = false;
	}
	else
	{
		ans.value = ans.value + x;
	}
}
function op(operation)
{
	opera = operation
	last = ans.value;
	ans.value='';
}
function eq()
{
	var an = document.form.ans;
	switch(opera)
	{
		case "+":
			an.value = parseInt(last) + parseInt(ans.value);
			break;
		case "-":
			an.value = parseInt(last) - parseInt(ans.value);
			break;
		case "*":
			an.value = parseInt(last) * parseInt(ans.value);
			break;
		case "/":
			an.value = parseInt(last) / parseInt(ans.value);
			break;
	}
	lastAns = an.value;
	reset = true;
}
function C()
{
	document.form.ans.value='';
	last = 0;
	opera = '';
	reset=true;
}
function back() {
	ans = document.form.ans;
	text = ans.value;
	ans.value = text.substring(0,text.length-1)
}