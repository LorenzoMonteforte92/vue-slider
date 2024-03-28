//stampare nel DOM le immagini grandi facendo in modo che ci sia solo quella il cui indice corrisponde ad activeItem
//stampare dinamicamente le thumbnail utilizzando v-for che prende una variabile che indica il singolo elemento
//fare in modo che al click sulla freccia next la classe active passi all'immagine successiva
        //aggiungere al pulsante un click event, collegarci una funzione che aumenti e diminuisca activeImg (che è collegata a all'indice delle immagini)
        //fare carosello infinito

//solo la thumbnail corrispondende a activeImg deve essere a sua volta active
    //richiamare l'indice della thumbnail che deve essere uguale a activeImg
const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],

            activeImg: 0,
        };
    },
    methods: {
        displayNextImg: function (){
            if(this.activeImg < this.slides.length - 1){
                this.activeImg ++
            } else {
                this.activeImg = 0
            }
            
        },

        displayPrevioustImg: function() {
            if(this.activeImg > 0 ){
                this.activeImg --
            } else {
                this.activeImg = this.slides.length - 1
            }
        }
    }
}).mount('#app');