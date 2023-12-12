const { createApp } = Vue;

createApp({
    data() {
        return {
            autoscroll: null,
            activeElement: 0,
            slides: [
                {
                    image: "img/01.webp",
                    title: "Marvel's Spiderman Miles Morale",
                    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                    image: "img/02.webp",
                    title: "Ratchet & Clank: Rift Apart",
                    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                    image: "img/03.webp",
                    title: "Fortnite",
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: "img/04.webp",
                    title: "Stray",
                    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                    image: "img/05.webp",
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],

        };
    },
    methods: {
        nextBtn() {
            if (this.activeElement == this.slides.length - 1) {
                this.activeElement = 0;
            }
            else {
                this.activeElement++;
            }
        },
        prevBtn() {
            if (this.activeElement == 0) {
                this.activeElement = this.slides.length - 1;
            }
            else {
                this.activeElement--;
            }
        },
        changeImage(index) {
            this.activeElement = index;
        },
        startAutoscroll() {
            this.autoscroll = setInterval(() => {
                this.nextBtn()
            }, 3000);
        },
        pauseAutoscroll() {
            clearInterval(this.autoscroll);
            this.autoscroll = null
        },
        stopAutoscroll() {
            this.pauseAutoscroll();
            this.activeElement = 0;
        },
    },
}).mount("#app");
