const userEmail = prompt("Inserisci la tua email per giocare:");
const emails = ["mail1@mail.com", "mail2@mail.com", "mail3@mail.com", "mail@email.it", "mail8@mail.it"];

// controllo ogni singola email in "emails"
for(let i = 0; i < emails.length; i++) {

    //verifico se l'email corrente è uguale a userEmail
    if(userEmail == emails[i]) {
        console.log("puoi giocare");
    }
}