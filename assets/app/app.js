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