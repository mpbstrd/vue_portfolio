<template>
    <div class="container" id="projects">
        <p class="title">{{ title }}</p>
        <div class="project-container"  v-for="project in projects" key="project" >
            <div class="project">
                <p id="img"><img :src="require('../assets/img/'+project.image+'.png')" width="360" height="200" alt="projects.image"></p>
                <div class="project-content">
                    <div class="project-description">
                        <p id="title">{{ project.name }}</p>
                        <p id="date">{{ project.date }}</p>
                        <p id="description">{{ project.description }}</p>
                        <!-- <p id="technologies" v-for="(tech,index) in project.technologies" key="index" >
                            <img :src="require('../assets/img/icons/'+tech+'.png')" width="25" height="25">
                        </p> -->
                        <button id="link" style="border-radius: 5px; border: none;"><a :href="project.link" target="_blank" style="text-decoration: none; color: black;">
                            {{link}}</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'PROJECTS',
            link: 'PROJECT LINK',
            projects: [
                {
                    name: 'Chaos Knight',
                    date: '2022 - Present',
                    description: 'Chaos Knight is a 2D top down RPG Dungeon Crawler game made with unity using the C# programming language. \
                                  Chaos Knight uses Procedural Generation to generate the map layout of the game. It also uses Deep Reinforcement \
                                  Learning to train the enemies\' attacks. \ The game is still in development.',
                    technologies: ['unity', 'python'],
                    link: 'https://github.com/KyleChristian1721/ThesisProject',
                    image: 'chaosknight'
                },
                {
                    name: 'Pabookus',
                    date: 'May 2022 - Aug 2022',
                    description: 'Pabookus is a booking website made with Codeigniter 3 PHP framework and MySQL database.',
                    technologies: ['html', 'css', 'js', 'php', 'mysql', 'codeigniter'],
                    link: 'https://github.com/ssntn/pabookus',
                    image: 'pabookus'
                },
                {
                    name: 'TUP School Management System',
                    date: 'Nov 2021 - Feb 2022',
                    description: 'TUP School Management is made as our final project for Software Engineering subject.It is created using \
                            Codeigniter PHP framework and MySQL database. It is a school management system that can be used by the school to manage \
                            their students, teachers, and courses. It also has a student portal where students can view their grades and other information. \
                            And has a teacher portal where teachers can view their students\' grades and other information.',
                    technologies: ['html', 'css', 'js', 'php', 'mysql', 'codeigniter'],
                    link: 'https://github.com/KyahWel/School-Managment-System',
                    image: 'tupers'
                }
            ]
        };
    },
    mounted() {
        this.$root.$on('languageChanged', (lang) => {
        switch (lang) {
            case 'jp':
                this.title = 'プロジェクト',
                this.projects[0].description = 'Chaos Knightは、Unityを使用してC＃プログラミング言語を使用して作成された2DトップダウンRPGダンジョンクローラーゲームです。\
                                                Chaos Knightは、プロシージャル生成を使用してゲームのマップレイアウトを生成します。 \
                                                また、敵の攻撃を訓練するために深層強化学習を使用します。\
                                                ゲームはまだ開発中です。',
                this.projects[1].description = 'Pabookusは、Codeigniter 3 PHPフレームワークとMySQLデータベースを使用して作成された予約ウェブサイトです。',
                this.projects[2].description = 'TUP School Managementは、ソフトウェアエンジニアリングの最終課題として作成されました。\
                                                Codeigniter PHPフレームワークとMySQLデータベースを使用して作成されました。\
                                                これは、学校が学生、教師、コースを管理できるようにするために使用できる学校管理システムです。\
                                                学生ポータルもあり、学生は成績やその他の情報を表示できます。\
                                                教師ポータルもあり、教師は学生の成績やその他の情報を表示できます。',
                this.link = 'プロジェクトリンク';
                break;
            case 'de':
                this.title = 'PROJEKTE',
                this.projects[0].description = 'Chaos Knight ist ein 2D-Top-Down-RPG-Dungeon-Crawler-Spiel, das mit Unity und der C#-Programmiersprache erstellt wurde.\
                                                Chaos Knight verwendet Prozedurale Generierung, um die Kartenaufteilung des Spiels zu generieren.\
                                                Es verwendet auch Deep Reinforcement Learning, um die Angriffe der Gegner zu trainieren.\
                                                Das Spiel befindet sich noch in der Entwicklung.',
                this.projects[1].description = 'Pabookus ist eine Buchungswebsite, die mit dem Codeigniter 3 PHP-Framework und der MySQL-Datenbank erstellt wurde.',
                this.projects[2].description = 'TUP School Management ist unser Abschlussprojekt für das Software Engineering-Modul.\
                                                Es wurde mit dem Codeigniter PHP-Framework und der MySQL-Datenbank erstellt.\
                                                Es ist ein Schulverwaltungssystem, das von der Schule verwendet werden kann, um ihre Schüler, Lehrer und Kurse zu verwalten.\
                                                Es gibt auch einen Studentenportal, wo die Schüler ihre Noten und andere Informationen sehen können.\
                                                Und es gibt einen Lehrerportal, wo die Lehrer die Noten und andere Informationen ihrer Schüler sehen können.',
                this.link = 'PROJEKT LINK';
                break;
            case 'fr':
                this.title = 'PROJETS',
                this.projects[0].description = 'Chaos Knight est un jeu de rôle en 2D en vue de dessus et en vue de dessus créé avec Unity et le langage de programmation C#.\
                                                Chaos Knight utilise la génération procédurale pour générer la disposition de la carte du jeu.\
                                                Il utilise également l\'apprentissage par renforcement profond pour former les attaques des ennemis.\
                                                Le jeu est toujours en développement.',
                this.projects[1].description = 'Pabookus est un site de réservation créé avec le framework PHP Codeigniter 3 et la base de données MySQL.',
                this.projects[2].description = 'TUP School Management est notre projet de fin de module en ingénierie logicielle.\
                                                Il a été créé avec le framework PHP Codeigniter et la base de données MySQL.\
                                                Il s\'agit d\'un système de gestion scolaire qui peut être utilisé par l\'école pour gérer ses élèves, ses enseignants et ses cours.\
                                                Il y a également un portail étudiant où les étudiants peuvent voir leurs notes et autres informations.\
                                                Et il y a un portail pour les enseignants où les enseignants peuvent voir les notes et autres informations de leurs étudiants.',
                this.link = 'LIEN DU PROJET';
                break;
            case 'es':
                this.title = 'PROYECTOS',
                this.projects[0].description = 'Chaos Knight es un juego de rol en 2D en vista superior y vista superior creado con Unity y el lenguaje de programación C#.\
                                                Chaos Knight usa la generación procedimental para generar la disposición del mapa del juego.\
                                                También usa aprendizaje por refuerzo profundo para entrenar los ataques de los enemigos.\
                                                El juego todavía está en desarrollo.',
                this.projects[1].description = 'Pabookus es un sitio de reservas creado con el framework PHP Codeigniter 3 y la base de datos MySQL.',
                this.projects[2].description = 'TUP School Management es nuestro proyecto final de la materia Ingeniería de Software.\
                                                Se creó con el framework PHP Codeigniter y la base de datos MySQL.\
                                                Es un sistema de gestión escolar que puede ser utilizado por la escuela para administrar a sus estudiantes, profesores y cursos.\
                                                También hay un portal de estudiantes donde los estudiantes pueden ver sus calificaciones y otras informaciones.\
                                                Y hay un portal para profesores donde los profesores pueden ver las calificaciones y otras informaciones de sus estudiantes.',
                this.link = 'ENLACE DEL PROYECTO';
                break;
            case 'ko':
                this.title = '프로젝트',
                this.projects[0].description = 'Chaos Knight는 Unity와 C# 프로그래밍 언어로 만든 2D 탑 다운 RPG 던전 크롤러 게임입니다.\
                                                Chaos Knight는 게임 맵의 배치를 생성하기 위해 프로시저 생성을 사용합니다.\
                                                또한 적의 공격을 훈련하기 위해 깊은 강화 학습을 사용합니다.\
                                                게임은 아직 개발 중입니다.',
                this.projects[1].description = 'Pabookus는 Codeigniter 3 PHP 프레임워크와 MySQL 데이터베이스를 사용하여 만든 예약 웹 사이트입니다.',
                this.projects[2].description = 'TUP School Management는 소프트웨어 엔지니어링의 최종 과제로 만들어졌습니다.\
                                                Codeigniter PHP 프레임워크와 MySQL 데이터베이스를 사용하여 만들었습니다.\
                                                이것은 학교가 학생, 선생님, 과목을 관리할 수 있도록 하는 학교 관리 시스템입니다.\
                                                학생 포털도 있고, 학생은 성적이나 기타 정보를 볼 수 있습니다.\
                                                선생님 포털도 있고, 선생님은 학생의 성적이나 기타 정보를 볼 수 있습니다.',
                this.link = '프로젝트 링크';
                break;
            case 'zh':
                this.title = '項目',
                this.projects[0].description = 'Chaos Knight是一款由Unity和C#编程语言制作的2D顶视角RPG地牢爬行游戏。\
                                                Chaos Knight使用程序生成来生成游戏地图的布局。\
                                                它还使用深度强化学习来训练敌人的攻击。\
                                                游戏仍在开发中。',
                this.projects[1].description = 'Pabookus是使用Codeigniter 3 PHP框架和MySQL数据库创建的预订网站。',
                this.projects[2].description = 'TUP School Management是我们的软件工程最终项目。\
                                                它是使用Codeigniter PHP框架和MySQL数据库创建的。\
                                                这是一种学校可以使用的学校管理系统，用于管理学生，老师和课程。\
                                                还有一个学生门户，学生可以在那里查看他们的成绩和其他信息。\
                                                还有一个老师门户，老师可以在那里查看他们学生的成绩和其他信息。',
                this.link = '項目鏈接';
                break;
            default:
                this.title = 'PROJECTS',
                this.projects[0].description = 'Chaos Knight is a 2D top-down RPG dungeon crawler game made with Unity and C# programming language.\
                                                Chaos Knight uses procedural generation to generate the layout of the game map.\
                                                It also uses deep reinforcement learning to train the enemies\' attacks.\
                                                The game is still in development.',
                this.projects[1].description = 'Pabookus is a reservation website made with Codeigniter 3 PHP framework and MySQL database.',
                this.projects[2].description = 'TUP School Management is our final project for Software Engineering.\
                                                It is made with Codeigniter PHP framework and MySQL database.\
                                                It is a school management system that can be used by the school to manage its students, teachers, and courses.\
                                                There is also a student portal where students can see their grades and other information.\
                                                And there is a portal for teachers where teachers can see their students\' grades and other information.',
                this.link = 'PROJECT LINK';
            break;
        }
        });
    }
};
</script>

<style>
.project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 95%;
    height: 80%;
    padding: 20px;
    margin: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease-in-out;
}
.project:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
.project-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 360px;
    height: 80%;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

#technologies{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 10px;
}

@media screen and (max-width: 600px) {
    .project-description {
        width: 90%;
    }
    .project #img img {
        width: 270px;
        height: 160px;
    }
}
</style>