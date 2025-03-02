//body-theme
document.getElementById('theme').addEventListener('click',function()
{
    document.body.style.backgroundColor=randomBG();
})

//calender
let TodayDate=getTodayDate();
document.getElementById('date').innerText=TodayDate;

