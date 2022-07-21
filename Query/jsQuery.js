function myFunction(e) {

    let col = document.querySelectorAll('ul#myUL li a');

    col.forEach(n => {

        n.parentNode.style.display = 'none';
        n.classList.remove('bold');


        if (this.value.length > 0 && this.value.trim() != '' && n.textContent.toLowerCase().startsWith(this.value.toLowerCase())) {

            n.parentNode.style.display = 'block';




            n.innerHTML = `<span class="bold">${this.value}</span>` + n.textContent.substr(this.value.length)
        }
    });
}

document.querySelector('input[name="search"]').addEventListener('keyup', myFunction);