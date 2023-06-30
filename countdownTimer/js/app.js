const endDate = "30 June 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

// const clock = () => {

// }


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000; //converted into seconds

    // console.log(diff);
    //console.log(end,now);

    if(diff < 0){  // return when difference becomes negative so that no negative value comes in dayds, and other fields,
        return;    // so function will come out at 0 value so that we can stop the negative values
    }

    //convert into days
    inputs[0].value =  Math.floor(diff/3600/24);

    //for only hours excluding days
    inputs[1].value = Math.floor((diff/3600)%24);

    //in minutes
    inputs[2].value =Math.floor((diff/60)%60);

    //in seconds
    inputs[3].value =Math.floor((diff)%60);

}

//initial call 
clock();


/*
   1 day - 24 hrs
   1 hr - 60 min
   60 minute -  3600 sec


*/

setInterval(
    () => {
        clock()
    },1000
)