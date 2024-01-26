class Animation {
    constructor(selector, transition, duraction) {
        this.selector = selector;
        this.transition = transition;
        this.duraction = duraction;
    }

    animate({selector, transition, duraction}) {
        const element = document.querySelector(`.${selector}`);
        document.documentElement.style.setProperty('--color', 'red');
        element.style.transitionDuration = `.4s`;

        // смена заднего фона
        function changeStyle() {
            if (element.style.backgroundColor === "red") {
                element.style.backgroundColor = "green";
            } else {
                element.style.backgroundColor = "red";
            }
        }

        // движение элемента
        let val = 0;
        setInterval(() => {
            val += 100;
            if (val > 100) {
                val = 0;
            } else {
                moveElement();
            }
        }, 1000);

        function moveElement() {
            document.documentElement.style.setProperty('--transform', `${val}px`);
        }

        setInterval(moveElement, 1000);
        setInterval(changeStyle, 3000);
    }
}

let anime = new Animation();

anime.animate({
    selector:'element',
    transition: "ease-in-out",
    duraction: 0.5, 
})