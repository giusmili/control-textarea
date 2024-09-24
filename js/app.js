import {textarea, count, warning} from "./count_app.js";

document.addEventListener('DOMContentLoaded',()=> {
    textarea.addEventListener('input', ()=>{
        const length = textarea.value.length;
        count.value = `${length} Nombre de caractères`;
    
        if (length > 20) {
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';
        }
    });
});
