function setUpButtonId(buttonID)
{
const button=document.getElementById(buttonID);
if(!button)
return;
button.addEventListener('click',function()
{
    button.disabled = true;
    button.style.pointerEvents = "none"; 
    button.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
});
}

setUpButtonId('btn-1');
setUpButtonId('btn-2');
setUpButtonId('btn-3');
setUpButtonId('btn-4');
setUpButtonId('btn-5');
setUpButtonId('btn-6');



