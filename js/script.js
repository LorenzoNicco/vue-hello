console.log("Collegamento javascript ok");

const { createApp } = Vue;

createApp({
    data () {
        return {
            message: "Hello Vue!",
            pic: "takashi-miyazaki-wrHRP10ZW70-unsplash.jpg",
            centerClass: "center",
            bgClass: "",
            pictureClass: ""
        }
    },
    methods: {
        imageStyle: function() {
            return this.pictureClass =  "shadow" + " " + "center";
        },
        bgStyle: function() {
            return this.bgClass = "flex" + " " + "bg-color" + " " + "bg-dimension";
        }
    }
}).mount('#app');