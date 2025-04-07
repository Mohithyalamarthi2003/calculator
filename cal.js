//begining of the script code

function display(input)
{
    document.getElementById("t").value+=input;
}

function allclear()
{
    document.getElementById("t").value="";
}

//for the calculation 

function calculate()
{
    let x=eval(document.getElementById("t").value);
    document.getElementById("t").value=x;

}