const output=document.querySelector('input')
function ac()
{
    output.value=" ";
}

function result(num)
{
    output.value+=num;
}
function cal()
{ 
    var final_output=eval(output.value);
    output.value=final_output;
}
function del()
{
    output.value=output.value.slice(0,-1)
}


