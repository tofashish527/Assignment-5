//body-theme
document.getElementById('theme').addEventListener('click',function()
{
   // document.body.style.backgroundColor=randomBG();
   document.getElementById('in').style.backgroundColor = randomBG();
})

//calender
let TodayDate=getTodayDate();
document.getElementById('date').innerText=TodayDate;

//toggle
document.getElementById('blog').style.display="none";

document.getElementById('new').addEventListener('click',function()
{
    handleToggle('blog','block');
    handleToggle('in','none');
})
document.getElementById('desk').addEventListener('click',function()
{
    handleToggle('in','block');
    handleToggle('blog','none');
})