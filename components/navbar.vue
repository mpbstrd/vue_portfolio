<template>
    <div>
        <nav class="navbar">
            <ul>
                <li></li>
                <li><a href="#home"><img :src="require('../assets/img/icons/home.png')" height="40" width="40"><span>{{ home }}</span></a></li>
                <li><a href="#profile"><img :src="require('../assets/img/icons/profile.png')" height="40" width="40"><span>{{ profile }}</span></a></li>
                <li><a href="#skills"><img :src="require('../assets/img/icons/skills.png')" height="40" width="40"><span>{{ skills }}</span></a></li>
                <li><a href="#projects"><img :src="require('../assets/img/icons/projects.png')" height="40" width="40"><span>{{ projects }}</span></a></li>
                <!-- <li style="float: right;">
                    <a-switch v-model="switchMode" checked-children="ON">
                        <template #checkedChildren>
                            <i class="fas fa-sun"></i>
                        </template>
                        <template #uncheckedChildren>
                            <i class="fas fa-moon"></i>
                        </template>
                    </a-switch>
                </li> -->
                <div class="language-selector">
                    <select id="languages" v-model="lang" @change="langChange" seleted="en">
                        <option value="en" selected>English</option>
                        <option value="jp">日本語</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>    
            </ul>          
        </nav>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'


export default {
  data() {
    return {
        switchMode: false,
        home: 'HOME',
        profile: 'PROFILE',
        skills: 'SKILLS',
        projects: 'PROJECTS',
    };
  },
  methods: {
    langChange() {
        switch (this.lang) {
            case 'jp':
                this.home = 'ホーム';
                this.profile = 'プロフィール';
                this.skills = 'スキル';
                this.projects = 'プロジェクト';
                break;
            case 'de':
                this.home = 'Zuhause';
                this.profile = 'Profil';
                this.skills = 'Fähigkeiten';
                this.projects = 'Projekte';
                break;
            default:
                this.home = 'HOME';
                this.profile = 'PROFILE';
                this.skills = 'SKILLS';
                this.projects = 'PROJECTS';
                break;
        }
    }
  }
};
</script>

<style>
.navbar {
    top: 0;
    position: -webkit-sticky;
    color: white;
    width: 100%;
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