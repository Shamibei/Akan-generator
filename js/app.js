
const generateAkan =  (e)=>{
    e.preventDefault();


    const theFemaleNames=["Akosua","Adowa","Abenaa","Akua","Yaa","Afua","Ama"];

    const theMaleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

    const frm = new FormData(document.querySelector("#form")) ;


    const userName = frm.get("user");

    
    const date = frm.get("date");

    const month = frm.get("month");

    const year = frm.get("year");

    const CC = parseInt(year.slice(0,2));

    const gender = frm.get("gender");


    const day  = Math.floor(( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7);
    

    if (gender === "female"){
        alert("congratulations! " + userName +" , " + "your Akan name is..." + theFemaleNames[day])
    }
    else if (gender === "male"){
        alert("congratulations! " + userName +" , " + "your Akan name is..." + theMaleNames[day])
    }
     
    else {
        alert("PLEASE INSERT GENDER")
    };

}
document.querySelector('#form').addEventListener("submit", generateAkan)


