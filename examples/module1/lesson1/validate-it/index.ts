import { validate } from "./validator";

function init() {
    console.log("init");
    const input = (document.getElementById('input') as HTMLInputElement);
    const button = (document.getElementById('validation-btn') as HTMLButtonElement);
    const cleanupButton = (document.getElementById('cleanup-btn') as HTMLButtonElement);
    const result = (document.getElementById('result') as HTMLDivElement);

    button.addEventListener('click', () => {
        console.log("try");
       
        const message = validate(input.value);
        result.innerHTML = message;

    });

    cleanupButton.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
}

init();
