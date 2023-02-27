const emailInput = document.querySelector("#email");
const button = document.querySelector('#btn');

const approved = document.querySelector('.approved');
const denied = document.querySelector('.denied');

const emails = ["mail1@mail.com", "mail2@mail.com", "mail3@mail.com", "mail@email.it", "mail8@mail.it"];

button.addEventListener('click', function() {

    // controllo se l'email è presente all'interno dell'array
    if(emails.includes(emailInput.value)) {
        // controllo ogni singola email in "emails"
        for(let i = 0; i < emails.length; i++) {
            //verifico se l'email corrente è uguale all'input
            if(emailInput.value == emails[i]) {
                console.log("puoi giocare");
                
                denied.classList.add('hidden');
                approved.classList.add('d-block');
                approved.classList.remove('hidden');
    
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
            }
        }
    } else {
        approved.classList.add('hidden');

        denied.classList.add('d-block');
        denied.classList.remove('hidden');

        console.log("Non puoi giocare");
    }
})
