// function setUpButtonId(buttonID)
// {
// const button=document.getElementById(buttonID);
// if(!button)
// return;
// button.addEventListener('click',function()
// {
//     button.disabled = true;
//     button.style.pointerEvents = "none"; 
//     button.style.opacity = "0.2";
//     const confirmed=getInnertextValueById('confirmed');
//     const assigned=getInnertextValueById('assigned');
//     alert("Board Updated Successfully");
//     const new1=confirmed+1;
//     const new2=assigned-1;
//     document.getElementById('confirmed').innerText=new1;
//     document.getElementById('assigned').innerText=new2;
    
//     if(new2===0)
//     {
//         alert("Congrates!!! You have completed all the current tasks")
//     }
// });
// }

// setUpButtonId('btn-1');
// setUpButtonId('btn-2');
// setUpButtonId('btn-3');
// setUpButtonId('btn-4');
// setUpButtonId('btn-5');
// setUpButtonId('btn-6');

//btn-1
const button=document.getElementById('btn-1');
button.addEventListener('click',function(){
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

    const title = document.getElementById('title1').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})

//btn-2
const button2=document.getElementById('btn-2');
button2.addEventListener('click',function(){
    button2.disabled = true;
    button2.style.pointerEvents = "none"; 
    button2.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;

    const title2 = document.getElementById('title2').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title2}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})

//btn-3
const button3=document.getElementById('btn-3');
button3.addEventListener('click',function(){
    button3.disabled = true;
    button3.style.pointerEvents = "none"; 
    button3.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;

    const title3 = document.getElementById('title3').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title3}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})

//btn-4
const button4=document.getElementById('btn-4');
button4.addEventListener('click',function(){
    button4.disabled = true;
    button4.style.pointerEvents = "none"; 
    button4.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;

    const title4 = document.getElementById('title4').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title4}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})

//btn-5
const button5=document.getElementById('btn-5');
button5.addEventListener('click',function(){
    button5.disabled = true;
    button5.style.pointerEvents = "none"; 
    button5.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;

    const title5 = document.getElementById('title5').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title5}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})

//btn-6
const button6=document.getElementById('btn-6');
button6.addEventListener('click',function(){
    button6.disabled = true;
    button6.style.pointerEvents = "none"; 
    button6.style.opacity = "0.2";
    const confirmed=getInnertextValueById('confirmed');
    const assigned=getInnertextValueById('assigned');
    alert("Board Updated Successfully");
    const new1=confirmed+1;
    const new2=assigned-1;
    document.getElementById('confirmed').innerText=new1;
    document.getElementById('assigned').innerText=new2;

    const title6 = document.getElementById('title6').innerText; 
    const activity = document.getElementById('activity');

    const div = document.createElement('div');
    div.classList.add("activity-log"); 
    const currentTime = new Date().toLocaleTimeString();
    div.style.padding='10px';
    div.style.backgroundColor='#F4F7FF';
    div.style.margin='15px';
    div.style.textAlign='justify';
    div.style.borderRadius='15px';
    div.innerHTML = `<p>You have completed the task <strong>${title6}</strong> at ${currentTime}</p>`;
    activity.appendChild(div);
    

    const clear=document.getElementById('clear');
    clear.addEventListener('click',function()
    {
    activity.innerText=" ";
    })
    
    if(new2===0)
    {
        alert("Congrates!!! You have completed all the current tasks")
    }
})