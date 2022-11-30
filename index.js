const diiv = document.getElementById('optim');

function meny() {
    diiv.style.display = "flex";
    diiv.style.width = "80%";
    diiv.style.height = "100%";
    let closebtn = document.querySelector('.closeBtn');

    closebtn.addEventListener('click', () => {
        diiv.style.display = "none";
    })
}



const plat = document.getElementById('optim');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-kart')) {
        const part = event.target.closest('.plase');

        const info = {
            id: part.dataset.id,
            imgSrc: part.querySelector('.images').getAttribute('src'),
            locat: part.querySelector('.location').getAttribute('href'),
            imgLoc: part.querySelector('.imag_loc').getAttribute('src'),
            name_t: part.querySelector('.name_t').innerText,
            text: part.querySelector('.text').innerText
        };


        const oncub = `
    <div class="plase" data-id="${info.id}">
    <img class="images" src="${info.imgSrc}" alt="">
    <div class="part">
        <h5 class="name_t">${info.name_t}</h5>
        <p class="text">
           ${info.text}
        </p>
        <a class="location" href="${info.locat}"> 
                        <img src="${info.imgLoc}" alt=""></a>
    </div>
</div>`;
        plat.insertAdjacentHTML('beforeend', oncub);
    }
})



document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let elasti = document.querySelectorAll('.search li');
    if (val != '') {
        elasti.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');

            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        elasti.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}



const container = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
let chicked = false;
let xAxis;
let x;

container.addEventListener('mouseup', () => {
    container.style.cursor = `grab`;
})
container.addEventListener('mousedown', e => {
    chicked = true;
    xAxis = e.offsetX - slider.offsetLeft;
    container.style.cursor = `grabbing`;
})

window.addEventListener('mouseup', () => {
    chicked = false;

})

container.addEventListener('mousemove', e => {
    if (!chicked) return;
    e.preventDefault();
    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    chickSize()
})

function chickSize() {
    let containerOut = container.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < containerOut.width) {
        slider.style.left = `-${sliderIn.width - containerOut.width}px`;
    }
}
let ini = document.getElementById('in');
let pin = document.getElementById('pin')
let pulse = document.getElementById('pulse')


function addCell(a) {
    if (a == 1) {
        pin.style.top = "35%";
        pulse.style.top = "35%";
        pin.style.left = "20%";
        pulse.style.left = "20%";
    }
    if (a == 2) {
        pin.style.top = "52%";
        pulse.style.top = "52%";
        pin.style.left = "43%";
        pulse.style.left = "43%";
    }
    if(a==3){
        pin.style.top= "45%";
        pulse.style.top= "45%";
        pin.style.left= "20%";
        pulse.style.left= "20%";
    }
    if(a==4){
        pin.style.top= "40%";
        pulse.style.top= "40%";
        pin.style.left= "65%";
        pulse.style.left= "65%";
    }
    if(a==5){
        pin.style.top= "35%";
        pulse.style.top= "35%";
        pin.style.left= "38%";
        pulse.style.left= "38%";
    }
    if(a==6){
        pin.style.top= "15%";
        pulse.style.top= "15%";
        pin.style.left= "38%";
        pulse.style.left= "38%";
    }
    if(a==7){
        pin.style.top= "15%";
        pulse.style.top= "15%";
        pin.style.left= "15%";
        pulse.style.left= "15%";
    }
    if(a==8){
        pin.style.top= "75%";
        pulse.style.top= "75%";
        pin.style.left= "85%";
        pulse.style.left= "85%";
    }
    if(a==9){
        pin.style.top= "15%";
        pulse.style.top= "15%";
        pin.style.left= "55%";
        pulse.style.left= "55%";
    }
    if(a==10){
        pin.style.top= "55%";
        pulse.style.top= "55%";
        pin.style.left= "60%";
        pulse.style.left= "60%";
    }
    if(a==11){
        pin.style.top= "40%";
        pulse.style.top= "40%";
        pin.style.left= "37%";
        pulse.style.left= "37%";
    }
}