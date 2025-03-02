//body-theme
document.getElementById('theme').addEventListener('click',function()
{
    document.body.style.backgroundColor=randomBG();
})

//calender
let TodayDate=getTodayDate();
document.getElementById('date').innerText=TodayDate;

//activity
// const title=document.getElementsByClassName('up1').innerText;
// console.log(title);
// const activity=document.getElementById('activity');
// const div=document.createElement('div');
// div.classList.add();
// div.style.padding='5px';
// div.style.backgroundColor='bg-blue-100';
// div.innerHTML = `<p>You have completed the task <strong>${title}</strong> at ${new Date().toLocaleTimeString()}</p>`;

// console.log(div.innerHTML);
// activity.appendChild(div);

