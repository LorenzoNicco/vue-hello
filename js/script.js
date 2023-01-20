console.log("Collegamento javascript ok");

const { createApp } = Vue;

createApp({
    data () {
        return {
            message: "Hello Vue!",
            pic: "takashi-miyazaki-wrHRP10ZW70-unsplash.jpg"
        }
    }
}).mount('#app');