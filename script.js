const mechanismWheelsEl = document.querySelectorAll(".mechanism-wheel");
const gateContainerEl = document.querySelector(".gate-container");
const leftWingEl = document.querySelector(".left-wing");
const rightWingEl = document.querySelector(".right-wing");

window.addEventListener('load', ()=>{

    mechanismWheelsEl.forEach((wheel)=>{
        const wheelHeight = wheel.offsetHeight;
        wheel.style.width = `${wheelHeight}px`;
    });

    // for responsivness(when the resolution changes)
    window.addEventListener('resize', ()=>{
        console.log("change");
        mechanismWheelsEl.forEach((wheel)=>{
            const wheelHeight = wheel.offsetHeight;
            wheel.style.width = `${wheelHeight}px`;
        });
    });
    [leftWingEl, rightWingEl].forEach((wing)=>{
        wing.addEventListener('click', (e)=>{
            console.log('click');
            leftWingEl.classList.toggle('left-wing-open');
            rightWingEl.classList.toggle('right-wing-open');
        });
    });
});