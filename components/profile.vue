<template>
    <div class="container" id="profile">
        <p class="title">{{ title}}</p>
        <p id="aboutme">{{ about }}</p>
        <div class="contact-container" id="socials">
            <div class="contact-element">
                <div class="contact-content">
                    <!-- <img src="@/assets/img/icons/email.png" width="30" height="30"> -->
                    <p>Email: matthewperrybustarde@gmail.com</p>
                </div>
                <div class="contact-content">
                    <!-- <img src="@/assets/img/icons/phone.png" width="30" height="30"> -->
                    <p>Phone: +639691391703</p>
                </div>
            </div>
            <div class="social-icons">
                <p><a href="https://www.facebook.com/drazmpb/" target="_blank"><img src="@/assets/img/icons/facebook.png" width="40" height="40" alt="facebook"></a></p>
                <p><a href="https://twitter.com/drazihrac" target="_blank"><img src="@/assets/img/icons/twitter.png" width="40" height="40" alt="twitter"></a></p>
                <p><a href="https://www.linkedin.com/in/mpbstrd/" target="_blank"><img src="@/assets/img/icons/linkedin.png" width="40" height="40" alt="linkedin"></a></p>
                <p><a href="https://github.com/mpbstrd" target="_blank"><img src="@/assets/img/icons/github.png" width="40" height="40" alt="github"></a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills: ['html', 'css', 'js', 'php', 'mysql', 'python', 'c', 'cs', 'codeigniter', 'unity'],
            title: "ABOUT ME",
            about: "Im Matthew Bustarde currently taking BS Computer Science at TUP - Manila. Im 21 years old from Imus, Cavite. I like playing games, listening to \
            music, and watching videos. My goal in life is to travel the world and visit different places. I also love learning new languages, and currently I can speak basic \
            Japanese and can understand some German words."
        };
    },
    mounted() {
        this.$root.$on('languageChanged', (lang) => {
        switch (lang) {
            case 'jp':
                this.title = '私について';
                this.about = '私は現在、マニラのTUPでコンピュータ科学のBSを取得しています。私は21歳で、イムス、カビテから来ています。\
                            私はゲームをするのが好きです、音楽を聞く、そしてビデオを見る。私の人生の目標は世界を旅行し、違う場所を訪れることです。私は新しい言語を学ぶのが好きで、\
                            現在、私は基本的な日本語を話すことができ、いくつかのドイツ語の単語を理解することができます。';
                break;
            case 'de':
                this.title = 'ÜBER MICH';
                this.about = 'Ich bin Matthew Bustarde und studiere derzeit an der TUP - Manila BS Computer Science. Ich bin 21 Jahre alt und komme aus Imus, Cavite.\
                            Ich mag es, Spiele zu spielen, Musik zu hören und Videos zu sehen. Mein Lebensziel ist es, die Welt zu bereisen und verschiedene Orte zu besuchen.\
                            Ich liebe es, neue Sprachen zu lernen, und derzeit kann ich ein bisschen Japanisch sprechen und einige deutsche Wörter verstehen.';
                break;
            case 'fr':
                this.title = 'À PROPOS DE MOI';
                this.about = 'Je suis Matthew Bustarde et je suis actuellement en train d\'étudier le BS Computer Science à TUP - Manila. J\'ai 21 ans et je viens d\'Imus, Cavite.\
                            J\'aime jouer aux jeux, écouter de la musique et regarder des vidéos. Mon objectif dans la vie est de voyager dans le monde et de visiter différents endroits.\
                            J\'aime apprendre de nouvelles langues, et actuellement, je peux parler un peu japonais et comprendre quelques mots allemands.';
                break;
            case 'es':
                this.title = 'SOBRE MI';
                this.about = 'Soy Matthew Bustarde y actualmente estoy estudiando el BS Computer Science en TUP - Manila. Tengo 21 años y soy de Imus, Cavite.\
                            Me gusta jugar juegos, escuchar música y ver videos. Mi objetivo en la vida es viajar por el mundo y visitar diferentes lugares.\
                            Me encanta aprender nuevos idiomas, y actualmente puedo hablar un poco de japonés y entender algunas palabras alemanas.';
                break;
            case 'ko':
                this.title = '나에 대해';
                this.about = '나는 현재 TUP - Manila의 BS 컴퓨터 과학을 공부하고 있습니다. 나는 21살이고, Imus, Cavite에서 왔습니다.\
                            나는 게임을 하고 싶어하고, 음악을 듣고, 비디오를 보는 것을 좋아합니다. 내 인생의 목표는 세계를 여행하고 다른 장소를 방문하는 것입니다.\
                            나는 새로운 언어를 배우는 것을 좋아하고, 현재 나는 일본어를 조금 말할 수 있고, 몇몇 독일어 단어를 이해할 수 있습니다.';
                break;
            case 'zh':
                this.title = '關於我';
                this.about = '我是Matthew Bustarde，目前正在TUP - Manila攻讀BS電腦科學。我21歲，來自Imus, Cavite。\
                            我喜歡玩遊戲，聽音樂和看視頻。我的人生目標是旅行世界，訪問不同的地方。\
                            我喜歡學習新的語言，目前我可以說一點日語，並且可以理解一些德語單詞。';
                break;
            default:
                this.title = "ABOUT ME";
                this.about = "Im Matthew Bustarde currently taking BS Computer Science at TUP - Manila. Im 21 years old from Imus, Cavite. I like playing games, listening to \
                            music, and watching videos. My goal in life is to travel the world and visit different places. I also love learning new languages, and currently I can speak basic \
                            Japanese and can understand some German words."
            break;
        }
        });
    }
};
</script>

<style>


</style>