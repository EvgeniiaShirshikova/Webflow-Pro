// анимация загловков

const tlHero = gsap.timeline({});
    
    const titlesWrapper = document.querySelector(".hero-title_wrapper");    
    const titles = titlesWrapper.querySelectorAll("h2");
    const textWrapper = document.querySelector(".hero-text_wrapper");
    
    tlHero.from(titles, {
        autoAlpha: 0,
        duration: 0.5, 
        y: '28rem',
        ease: "power4.out",
        stagger: 0.15,
    })
    .from(titles, {
        delay: 0.05,
        duration: 1.6, 
        scale: 0,
        ease: "elastic.out(1,0.45)",
        stagger: 0.15,
    }, '<')
    .from(textWrapper, {
        delay: 0.6,
        autoAlpha: 0,
        duration: 1,
        ease: Power4.easeOut,
    }, '<')

//анимация линий

//const baseLineVert = document.querySelector(".lineVert");
//const baseLineHorizLeft = document.querySelector(".lineHorizLeft");
//const baseLineHorizRight = document.querySelector(".lineHorizRight");
const frag = document.createDocumentFragment();


function createLineVert(wrapper, baseLine) {
    let baseLineVert =  document.querySelector(baseLine);
    const lineVert = baseLineVert.cloneNode(true);
    frag.appendChild(lineVert);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlVert = gsap.timeline({
            onComplete: animateLine
        })
        
        tlVert.set(lineVert, {
            left: `${gsap.utils.random(10, 90)}%`,
        })
        .fromTo(lineVert, {y: '-30rem'}, {duration: gsap.utils.random(8, 12, 2),
            y: '30rem'})
        .fromTo(lineVert, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }

    animateLine();
}

function createLineHorizLeft(wrapper, baseLine) {  
    let baseLineHorizLeft =  document.querySelector(baseLine);
    const lineHorizLeft = baseLineHorizLeft.cloneNode(true);
    frag.appendChild(lineHorizLeft);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlHorizLeft = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizLeft.set(lineHorizLeft, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizLeft, {x: '28vw'}, {duration: gsap.utils.random(4, 8, 1),
            x: '-5vw'})
        .fromTo(lineHorizLeft, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }

    animateLine();
}

function createLineHorizRight(wrapper, baseLine) {  
    let baseLineHorizRight =  document.querySelector(baseLine);
    const lineHorizRight = baseLineHorizRight.cloneNode(true);
    frag.appendChild(lineHorizRight);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlHorizRight = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizRight.set(lineHorizRight, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizRight, {x: '-28vw'}, {duration: gsap.utils.random(4, 8, 1),
            x: '5vw'})
        .fromTo(lineHorizRight, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }

    animateLine();
}

let sections = document.querySelectorAll('section');

sections.forEach((section) => createLines(
    createLineVert("section .lines-vert.left", 'section .lineVert');
    createLineVert("section .lines-vert.right", 'section .lineVert');
    createLineHorizLeft('section .lines-horiz-top.left', 'section .lineHorizLeft');
    createLineHorizLeft('section .lines-horiz-bottom.left', 'section .lineHorizLeft');
    createLineHorizRight('section .lines-horiz-top.right', 'section .lineHorizRight');
    createLineHorizRight('section .lines-horiz-bottom.right', 'section .lineHorizRight');
));



/* function createLines() {
    createLineVert("section .lines-vert.left", 'section .lineVert');
    createLineVert("section .lines-vert.right", 'section .lineVert');
    createLineHorizLeft('section .lines-horiz-top.left', 'section .lineHorizLeft');
    createLineHorizLeft('section .lines-horiz-bottom.left', 'section .lineHorizLeft');
    createLineHorizRight('section .lines-horiz-top.right', 'section .lineHorizRight');
    createLineHorizRight('section .lines-horiz-bottom.right', 'section .lineHorizRight');
}  */

/* gsap.to("section", {
    stagger: createLines,
    scrollTrigger: {
    trigger: "section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom top", // end after scrolling 500px beyond the start
    }
}) */

/* let tl = gsap.timeline({
    stagger: "section",
    scrollTrigger: {
      trigger: "section",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom top", // end after scrolling 500px beyond the start
      onEnter: createLines,
    },
  });
 */

