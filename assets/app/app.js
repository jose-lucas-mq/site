// function to typewrite the text
// in the element with id "adjectives"

const texts = ["engenheiro de software", "programador", "fã de música", "engenheiro devops", "SRE", "nerd"];

let index = 0;
let isDeleting = false;
let textIndex = 0;
let speed = 250;

const typeWriter = () => {
    const typewrite = document.querySelector("#adjectives");
    const currentText = texts[textIndex];

    if (!isDeleting && index <= currentText.length) {
        typewrite.textContent = currentText.substring(0, index);
        index++;
        speed = 250;
    } else if (isDeleting && index >= 0) {
        typewrite.textContent = currentText.substring(0, index);
        index--;
        speed = 50;
    }

    if(index > currentText.length) {
        isDeleting = true;
    }

    if(index === 0 && isDeleting){
        isDeleting = false;

        if(textIndex < texts.length - 1) {
            textIndex++;
        }else{
            textIndex = 0;
        }
    } setTimeout(typeWriter, speed);
}

window.addEventListener("load", typeWriter);



// function to create a link to send a message with the whatsapp

function sendToWhatsApp(){
    const userName = document.querySelector("#name").value.trim();
    const userEmail = document.querySelector("#email").value.trim();
    const userSubject = document.querySelector("#subject").value.trim();
    const userMessage = document.querySelector("#message").value.trim();

    window.open(`https://wa.me/5511954727407?text=Oi,%20me%20chamo%20${userName}.%20Quero%20falar%20sobre%20${userSubject}:%20${userMessage}.%20Por%20favor%20entre%20em%20contato%20comigo%20pelo%20email%20${userEmail}`, '_blank');

    document.getElementById("contact-form").reset();
}


// function to scroll site to the form

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
        
        window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
        });
    });
});