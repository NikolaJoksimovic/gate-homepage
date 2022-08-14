const mechanismWheelsEl = document.querySelectorAll(".mechanism-wheel");
const gateContainerEl = document.querySelector(".gate-container");
const leftWingEl = document.querySelector(".left-wing");
const rightWingEl = document.querySelector(".right-wing");
const mechanismsTopEl = document.querySelectorAll(".mechanism-top");
const mechanismsBottomEl = document.querySelectorAll(".mechanism-bottom");

window.addEventListener('load', ()=>{

    mechanismWheelsEl.forEach((wheel)=>{
        const wheelHeight = wheel.offsetHeight;
        wheel.style.width = `${wheelHeight}px`;
        // wheel.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`
    });

    // for responsivness(when the resolution changes)
    window.addEventListener('resize', ()=>{
        console.log("change");
        mechanismWheelsEl.forEach((wheel)=>{
            const wheelHeight = wheel.offsetHeight;
            wheel.style.width = `${wheelHeight}px`;
        });
    });
    
    // opening gate
    [leftWingEl, rightWingEl].forEach((wing)=>{
        wing.addEventListener('click', (e)=>{
            
            // gate
            leftWingEl.classList.toggle('left-wing-open');
            rightWingEl.classList.toggle('right-wing-open');
            // wheels
            mechanismWheelsEl.forEach((wheel)=>{
                wheel.classList.toggle('mechanism-wheel-rotate');
            });
            // mechanism top-bottom
            mechanismsTopEl.forEach((element)=>{
                element.classList.toggle('mechanism-translate-left')
            });
            mechanismsBottomEl.forEach((element)=>{
                element.classList.toggle('mechanism-translate-right')
            });
        });
    });
});