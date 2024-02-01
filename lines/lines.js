const linesVWrapper = document.querySelector(".lines-vert");
const baseLineV = document.querySelector(".lineV");
const frag = document.createDocumentFragment();

function createLineV() {  
    const lineV = baseLineV.cloneNode(true);
    frag.appendChild(lineV);
    linesVWrapper.appendChild(frag);

    function animateLine() {
        const tlVert = gsap.timeline({
            repeat: -1,
            onRepeat: animateLine
        })
        
        tlVert.set(lineV, {
            left: gsap.utils.random(20, 200),
        })
        .fromTo(lineV, {y: 0}, {duration: gsap.utils.random(5, 10),
            y: 500})
        .fromTo(lineV, {height: 200,
            opacity: 1}, {duration: 1, height: 0,
                opacity: 0})

    }

    animateLine();
}

createLineV();

/* function createLineV() {  
    const lineV = baseLineV.cloneNode(true);
    frag.appendChild(lineV);
    linesVWrapper.appendChild(frag);

    const tlVert = gsap.timeline({})
        
    tlVert.set(lineV, {
            left: gsap.utils.random(20, 200),
        })
        .to(lineV, {
            duration: gsap.utils.random(5, 10),
            y: 500,
        })
        .to(lineV, {
            duration: 1,
            height: 0,
            opacity: 0,
        })

    tlVert.eventCallback("onComplete", () => {
        lineV.remove();
    });
}
 */

/* setInterval(() => {
  createLineV();
}, 0); */