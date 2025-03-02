function getInnertextValueById(id){
    const value=document.getElementById(id).innerText;
    const convertedvalue=parseFloat(value);
    return convertedvalue;
}

function randomBG(){
    //color=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    return `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
}

function getTodayDate() {
    let todayDate = new Date();
    let day = todayDate.toString().split(' ')[0];  
    let month = todayDate.toString().split(' ')[1]; 
    let date = todayDate.getDate(); 
    let year = todayDate.getFullYear(); 

    return `${day},\n ${month} ${date}  ${year}`;
}


// function activitylog(id)
// {
// const title=document.getElementsById(id).innerText;
// console.log(title);
// const activity=document.getElementById('activity');
// const div=document.createElement('div');
// div.classList.add();
// div.style.padding='20px';
// div.style.backgroundColor='bg-blue-100';
// div.innerHTML = `<p>You have completed the task <strong>${title}</strong> at ${new Date().toLocaleTimeString()}</p>`;
// console.log(div.innerHTML);
// activity.appendChild(div);




