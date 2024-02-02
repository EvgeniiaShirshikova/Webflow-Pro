const star1SVG = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.22308 0.249425C4.23779 0.107691 4.35724 0 4.49973 0C4.64223 0 4.76168 0.107691 4.77639 0.249425L4.99625 2.36736C5.08593 3.23125 5.76875 3.91407 6.63264 4.00375L8.75058 4.22361C8.89231 4.23832 9 4.35777 9 4.50027C9 4.64276 8.89231 4.76221 8.75058 4.77692L6.63264 4.99678C5.76875 5.08646 5.08593 5.76928 4.99625 6.63317L4.77639 8.75111C4.76168 8.89284 4.64223 9.00053 4.49973 9.00053C4.35724 9.00053 4.23779 8.89284 4.22308 8.75111L4.00322 6.63317C3.91354 5.76929 3.23072 5.08646 2.36683 4.99678L0.248893 4.77692C0.107159 4.76221 -0.00053215 4.64276 -0.00053215 4.50027C-0.00053215 4.35777 0.107158 4.23832 0.248893 4.22361L2.36683 4.00375C3.23072 3.91407 3.91354 3.23125 4.00322 2.36736L4.22308 0.249425Z" fill="#10CA99"/>
</svg>`;

const star2SVG = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.84203 0.434082C6.00273 0.434082 6.13744 0.555988 6.15404 0.716432L6.40198 3.11394C6.50312 4.09186 7.27317 4.86482 8.24743 4.96634L10.6359 5.21522C10.7958 5.23187 10.9172 5.36709 10.9172 5.5284C10.9172 5.6897 10.7958 5.82492 10.6359 5.84157L8.24743 6.09045C7.27317 6.19197 6.50312 6.96493 6.40198 7.94285L6.15404 10.3404C6.13744 10.5008 6.00273 10.6227 5.84203 10.6227C5.68133 10.6227 5.54663 10.5008 5.53003 10.3404L5.28209 7.94285C5.18095 6.96493 4.41089 6.19197 3.43664 6.09045L1.04814 5.84157C0.888294 5.82492 0.766846 5.6897 0.766846 5.5284C0.766846 5.36709 0.888294 5.23187 1.04814 5.21522L3.43664 4.96634C4.4109 4.86482 5.18095 4.09186 5.28209 3.11394L5.53003 0.716432C5.54663 0.555988 5.68133 0.434082 5.84203 0.434082ZM5.84203 3.54846C5.60279 4.52365 4.84106 5.28825 3.86954 5.5284C4.84106 5.76854 5.60279 6.53314 5.84203 7.50833C6.08128 6.53314 6.84301 5.76854 7.81453 5.5284C6.84301 5.28825 6.08128 4.52365 5.84203 3.54846Z" fill="white"/>
</svg>`;

const starSVGs = [star1SVG, star2SVG];

const maxStars = 60;

let currentStars = 0;

let starIndex = 0;


function createAndAnimateStar(wrapper, radius, duration, direction) {
    if (currentStars >= maxStars) {
        return;
    }
    currentStars++;
    let svgWrapper = document.querySelector(wrapper);
    let svgContainer = document.createElement('div');
    svgContainer.style.position = 'absolute';
    svgContainer.style.top = '50%';
    svgContainer.style.left = '50%';
    svgContainer.style.transform = 'translate(-50%, -50%)';
    svgContainer.style.transformOrigin = 'center';

    svgContainer.innerHTML = starSVGs[Math.floor(Math.random() * starSVGs.length)];
    starIndex = (starIndex + 1) % starSVGs.length;

    const initialScale = 0.2 + Math.random() * 1;

    const initialOpacity = 0.5 + Math.random() * 0.5;

    const rotations = 360 * (1 + Math.random() * 1);

    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 80;

    //let animationName = `rotateAndScale-${Math.random().toString(36).substr(2, 9)}`;

    let rotationDirection = direction === 'clockwise' ? '' : '-';

    const tl = gsap.timeline({})

    tl.fromTo(svgContainer, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: initialScale,
    }, {
        duration: duration,
        rotation: rotationDirection+rotations,
        x: radius + offsetX, 
        y: radius + offsetY,
        scale: initialScale    
    })
    .fromTo(svgContainer, {opacity: initialOpacity}, {opacity: 0}, "<80%")

    /* let keyframes = `
    @keyframes ${animationName} {
        0% {
            transform: rotate(0deg) translate(0, 0) rotate(0deg) scale(${initialScale});
            opacity: ${initialOpacity};
        }
        80% {
            transform: rotate(${rotationDirection}${rotations * 0.8}deg) translate(${0.8 * radius + offsetX}px, ${0.8 * radius + offsetY}px) rotate(-${rotations * 0.8}deg) scale(${initialScale});
            opacity: ${initialOpacity};
        }
        100% {
            transform: rotate(${rotationDirection}${rotations}deg) translate(${radius + offsetX}px, ${radius + offsetY}px) rotate(-${rotations}deg) scale(${initialScale});
            opacity: 0;
        }
    }`;

    let styleSheet = document.createElement("style");
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    svgContainer.style.animation = `${animationName} ${duration}s linear forwards`; */

    svgContainer.addEventListener('animationend', () => {
        svgContainer.remove();
        currentStars--;
    });

    svgWrapper.appendChild(svgContainer);
}

function maintainStars(wrapper, direction) {
    const svgContainer = document.querySelector('.svg-container');
    const radius = svgContainer.offsetHeight / 2;

    setInterval(() => {
        if (currentStars < maxStars) {
            const duration = 20 + Math.random() * 25;
            createAndAnimateStar(wrapper, radius, duration, direction);
        }
    }, 100);
}


maintainStars('.svg-rotate-circle', 'clockwise');
maintainStars('.svg-rotate-circle-2', 'clockwise');

/*function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }*/

/* const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            maintainStars('.svg-rotate-circle', 'clockwise');
        } else {
            document.querySelector('.svg-rotate-circle').innerHTML = '';
        };
    }); 
    }, {root:  null,
    rootMargin: '0px',
    threshold: 0});

    const btnFirst = document.querySelector('.button-container.first');
    observer.observe(btnFirst);


const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                maintainStars('.svg-rotate-circle-2', 'clockwise');
            } else {
                document.querySelector('.svg-rotate-circle-2').innerHTML = '';
            };
        }); 
        }, {root: null,
            rootMargin: '0px',
            threshold: 0});
    
const btnSecond = document.querySelector('.button-container.second');
observer2.observe(btnSecond);


function adjustSpinnerContainerSize() {
    const btn = document.querySelector('.button-container');
    const spinnerContainer = document.querySelector('.spinner-container');

    if (btn && spinnerContainer) {
        const btnStyles = window.getComputedStyle(btn);

        const width = parseFloat(btnStyles.width) + parseFloat(btnStyles.paddingLeft) + parseFloat(btnStyles.paddingRight);
        const height = parseFloat(btnStyles.height) + parseFloat(btnStyles.paddingTop) + parseFloat(btnStyles.paddingBottom);

        spinnerContainer.style.width = `${width}px`;
        spinnerContainer.style.height = `${height}px`;
    }
}

window.addEventListener('load', adjustSpinnerContainerSize);

window.addEventListener('resize', adjustSpinnerContainerSize); */