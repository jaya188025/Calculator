const jaya=document.querySelector('input')
function ac()
{
    jaya.value=" ";
}

function result(num)
{
    jaya.value+=num;
}
function cal()
{ 
    var output=eval(jaya.value);
    jaya.value=output;
}


