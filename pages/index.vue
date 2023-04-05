<template>
  <div>
    <nav class="navbar">
        <ul>
            <li></li>
            <li><a href="#home"><img :src="require('../assets/img/icons/home.png')" height="40" width="40"><span>{{ home }}</span></a></li>
            <li><a href="#profile"><img :src="require('../assets/img/icons/profile.png')" height="40" width="40"><span>{{ profile }}</span></a></li>
            <li><a href="#skills"><img :src="require('../assets/img/icons/skills.png')" height="40" width="40"><span>{{ skills }}</span></a></li>
            <li><a href="#projects"><img :src="require('../assets/img/icons/projects.png')" height="40" width="40"><span>{{ projects }}</span></a></li>
            <div class="language-selector">
                <select id="languages" v-model="lang" @change="langChange" seleted="en">
                    <option value="en" selected>English</option>
                    <option value="jp">日本語</option>
                    <option value="zh">中文</option>
                    <option value="ko">한국어</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                </select>
            </div>    
        </ul>          
    </nav>
    <home></home>
    <profile></profile>
    <skills></skills>
    <projects></projects>
  </div>
</template>

<script>
import { Layout, Menu } from 'ant-design-vue';
import navbar from '../components/navbar.vue';
import home from '../components/home.vue';
import skills from '../components/skills.vue';
import projects from '../components/projects.vue';
import profile from '../components/profile.vue';

export default {
  data() {
    return {
      name: 'Navbar',
      components: {
        'a-layout-header': Layout.Header,
        'a-menu': Menu,
        'a-menu-item': Menu.Item,
      },
      home: 'HOME',
      profile: 'PROFILE',
      skills: 'SKILLS',
      projects: 'PROJECTS',
    };
  },
  components: {
    'navbar': navbar,
    'home': home,
    'skills': skills,
    'projects': projects,
    'profile': profile
  },
  methods: {
    langChange() {
        switch (this.lang) {
            case 'jp':
                this.home = 'ホーム';
                this.profile = 'プロフィール';
                this.skills = 'スキル';
                this.projects = 'プロジェクト';
                this.$root.$emit('languageChanged', this.lang);
                break;
            case 'de':
                this.home = 'Zuhause';
                this.profile = 'Profil';
                this.skills = 'Fähigkeiten';
                this.projects = 'Projekte';
                this.$root.$emit('languageChanged', this.lang);
                break;
            case 'fr':
                this.home = 'MAISON';
                this.profile = 'PROFIL';
                this.skills = 'COMPÉTENCES';
                this.projects = 'PROJETS';
                this.$root.$emit('languageChanged', this.lang);
                break;
            case 'es':
                this.home = 'CASA';
                this.profile = 'PERFIL';
                this.skills = 'HABILIDADES';
                this.projects = 'PROYECTOS';
                this.$root.$emit('languageChanged', this.lang);
                break;
            case 'ko':
                this.home = '집';
                this.profile = '프로필';
                this.skills = '기술';
                this.projects = '프로젝트';
                this.$root.$emit('languageChanged', this.lang);
                break;
            case 'zh':
                this.home = '家';
                this.profile = '个人资料';
                this.skills = '技能';
                this.projects = '项目';
                this.$root.$emit('languageChanged', this.lang);
                break;
            default:
                this.home = 'HOME';
                this.profile = 'PROFILE';
                this.skills = 'SKILLS';
                this.projects = 'PROJECTS';
                this.$root.$emit('languageChanged', this.lang);
                break;
        }
    }
  }
};
</script>

<style>
.navbar {
    top: 0;
    position: sticky;
    color: white;
    width: 100%;
    background-color: #1e1e1e;
    z-index: 100;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1e1e1e;
    text-align: center;
    border-bottom: 1px solid white;
}

.navbar li {
    padding: 20px;
    display: inline-block;
    right: 1;
}

.navbar ul li a {
    font-family: 'Archivo';
    font-size: 20px;
    text-decoration: none;
    color: white;
}

.navbar ul li a:hover {
    color: #007acc;
}

.navbar ul li a img {
    display: none;
}

.language-selector {
    display: inline-block;
    margin-right: 10px;
}

.language-selector label {
    display: inline-block;
    margin-right: 10px;
}

.language-selector select {
    padding: 5px;
    border: none;
    background-color: #1e1e1e;
    font-size: 16px;
    cursor: pointer;
}
  

@media screen and (max-width: 600px) {
    .navbar ul li a span{
        display: none;
        padding: 4px;
    }
    .navbar ul li a img{
        display: block;
        padding: 4px;
    }
}
</style>