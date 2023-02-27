const userEmail = "mail1@mail.com";
const emails = ["mail1@mail.com", "mail2@mail.com", "mail3@mail.com", "mail@email.it", "mail8@mail.it"];

let exists = false;

// controllo ogni singola email in "emails"
for(let i = 0; i < emails.length; i++) {

    //verifico se l'email esiste
    if(userEmail == emails[i]) {
        exists = true;
    }
}

//se esiste vado avanti con il programma
if(exists) {
    console.log("puoi giocare");
    let dadiPc = Math.floor(Math.random() * (7 - 1) + 1); // genera numero random tra 1 e 6
    let dadiUser = Math.floor(Math.random() * (7 - 1) + 1 );
    console.log(dadiPc, dadiUser);
    if(dadiPc > dadiUser) {
        console.log("PC vince!");
    } else if(dadiUser > dadiPc) {
        console.log("TU Vinci");
    } else {
        console.log("pareggio");
    }
} else {
    console.log("Email non esiste");
}