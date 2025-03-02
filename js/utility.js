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

    return `${day} ${month} ${date}  ${year}`;
}

function handleToggle(id, status)
{
    document.getElementById(id).style.display=status;
}



