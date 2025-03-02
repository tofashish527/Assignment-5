for (let i=1; i<=6; i++) { 
    let button = document.getElementById(`btn-${i}`);
    button.addEventListener('click', function () {
        //task-count
        button.disabled = true;
        button.style.pointerEvents = 'none';
        button.style.opacity = '0.2';
        const confirmed = getInnertextValueById('confirmed');
        const assigned = getInnertextValueById('assigned');
        alert("Board Updated Successfully");
        const new1 = confirmed + 1;
        const new2 = assigned - 1;
        document.getElementById('confirmed').innerText = new1;
        document.getElementById('assigned').innerText = new2;
        
        //activity-div
        const title = document.getElementById(`title${i}`).innerText;
        const activity = document.getElementById('activity');
        const div = document.createElement('div');
        div.classList.add('activity-log');
        const currentTime = new Date().toLocaleTimeString();
        div.style.padding = '10px';
        div.style.backgroundColor = '#F4F7FF';
        div.style.margin = '15px';
        div.style.textAlign = 'justify';
        div.style.borderRadius = '15px';
        div.innerHTML = `<p>You have completed the task <strong>${title}</strong> at ${currentTime}</p>`;
        activity.appendChild(div);

        if (new2 === 0) {
            alert("Congrats!!! You have completed all the current tasks");
        }
    });
}
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('activity').innerText = " ";
});
