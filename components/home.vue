<template>
    <div class="container" id="home">
        <p class="title" id="intro"><span id="changeText">{{ greeting }} </span>{{ me }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            greetings: ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Hallo!", "Hej!",
            "你好！","こんにちは！","안녕하세요!","สวัสดี!","नमस्ते!","नमस्कार!",
            "Здравствуйте!", "Здраво!",],
            me: 'Im Matthew Bustarde an aspiring developer.',
            greeting: '',
            index: 0,
            intervalId: null
        };
    },
    mounted() {
        this.startInterval();
        this.$root.$on('languageChanged', (lang) => {
        switch (lang) {
            case 'jp':
                this.me = '私はMatthew Bustardeという、志望する開発者です。';
                break;
            case 'de':
                this.me = 'Ich bin Matthew Bustarde ein begeisterter Entwickler.';
                break;
            case 'fr':
                this.me = 'Je suis Matthew Bustarde un développeur en herbe.';
                break;
            case 'es':
                this.me = 'Soy Matthew Bustarde un desarrollador en ciernes.';
                break;
            case 'ko':
                this.me = '나는 Matthew Bustarde라는 개발자입니다.';
                break;
            case 'zh':
                this.me = '我是Matthew Bustarde一名有抱负的开发者。';
                break;
            default:
                this.me = 'Im Matthew Bustarde an aspiring developer.';
            break;
        }
        });
    },
    methods: {
        startInterval() {
            this.intervalId = setInterval(this.change, 1000);
        },
        change() {
            this.greeting = this.greetings[this.index];
            this.index++;
            if (this.index >= this.greetings.length) {
                this.index = 0;
            }
        },
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }
};
</script>

