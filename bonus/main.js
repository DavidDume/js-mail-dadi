const emailInput = document.querySelector("#email");
const button = document.querySelector('#btn');

const message = document.querySelector('#message');

const approved = document.querySelector('.approved');
const denied = document.querySelector('.denied');

const emails = ["mail1@mail.com", "mail2@mail.com", "mail3@mail.com", "mail@email.it", "mail8@mail.it"];

button.addEventListener('click', function() {

    //riattivo classe inactive dopo che l'utente clicca
    for(let d = 1; d <= 6; d++) {
        const pc = document.querySelector(`.p${d}`);
        const user = document.querySelector(`.u${d}`);
        pc.classList.add('inactive');
        pc.classList.remove('active');
        user.classList.add('inactive');
        user.classList.remove('active');
    }

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
                const pc = document.querySelector(`.p${dadiPc}`);
                pc.classList.remove('inactive');
                pc.classList.add('active');

                let dadiUser = Math.floor(Math.random() * (7 - 1) + 1 );
                const user = document.querySelector(`.u${dadiUser}`);
                user.classList.remove('inactive');
                user.classList.add('active');

                console.log(dadiPc, dadiUser);
    
                if(dadiPc > dadiUser) {
                    console.log("PC vince!");
                    message.innerHTML = "PC vince!";
                } else if(dadiUser > dadiPc) {
                    console.log("TU Vinci");
                    message.innerHTML = "Tu vinci!";
                } else {
                    console.log("pareggio");
                    message.innerHTML = "Pareggio!";
                }
            }
        }
    } else {
        approved.classList.add('hidden');

        denied.classList.add('d-block');
        denied.classList.remove('hidden');

        message.innerHTML = "";

        console.log("Non puoi giocare");
    }
})
