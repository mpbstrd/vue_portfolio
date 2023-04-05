<template>
    <div class="container" id="skills">
        <p class="title">{{ title }}</p>
        <template>
            <div>
              <a-row :gutter="16">
                <a-col v-for="(skill, index) in skills" :key="index" :span="6">
                  <div class="grid-element">
                    <img :src="require('../assets/img/icons/'+skill+'.png')" width="100" height="100">
                    <p>{{ skill == 'cs' ? "C#" : skill.toUpperCase() }}</p>
                  </div>
                </a-col>
              </a-row>
            </div>
          </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconPath: '../assets/img/icons/',
            iconExt: '.png',
            skills: ['html', 'css', 'js', 'php', 'mysql', 'python', 'c', 'cs', 'codeigniter', 'unity'],
            title: 'SKILLS'
        };
    },
    mounted() {
        this.$root.$on('languageChanged', (lang) => {
        switch (lang) {
            case 'jp':
                this.title = 'スキル';
                break;
            case 'de':
                this.title = 'Fähigkeiten'
                break;
            case 'fr':
                this.title = 'Compétences';
                break;
            case 'es':
                this.title = 'Habilidades';
                break;
            case 'zh':
                this.title = '技能';
                break;
            case 'ko':
                this.title = '기술';
                break;
            default:
                this.title = 'SKILLS';
                break;
        }
        });
    }
};
</script>

<style>
.grid-container {
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: auto auto auto auto auto; */
    padding: 5px;
    margin: auto;
    margin-bottom: 10px;
    width: auto;
    height: auto;
}

.grid-element {
    font-family: 'Roboto';
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
    text-align: center;
}

.grid-element img{
    cursor: pointer;
    margin: 16px;
    transition: all 0.2s ease-in-out;
}
.grid-element img:hover  {
    transform: scale(1.3);
}

.header-text {
    font-family: 'Roboto';
    font-weight: bold;
    color: white;
    padding: 10px;
    margin-left: 30px;
    font-size: 30px;
}

@media screen and (max-width: 600px) {
}  
</style>