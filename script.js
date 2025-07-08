function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}
function copyEmail() {
  const email = "anioljolo@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
      successMessage.style.animation = "fadeIn 1s ease-out";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000); // El mensaje desaparece después de 3 segundos
    })
    .catch((err) => {
      alert("Error al copiar el correo: " + err);
    });
}

// Animaciones de entrada en scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.main, .skills, .about, .portfolio').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});


//abrir menu movil
function openMenu() {
    document.querySelector('nav').classList.toggle('open');
}


//cambiar idioma

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem("preferredLanguage", lang);
    updateActiveLanguageIcon(lang);
}

function updateActiveLanguageIcon(lang) {
    const languages = ['es', 'en', 'ca'];
    languages.forEach(l => {
        const img = document.getElementById('lang-' + l);
        if (img) {
            if (l === lang) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        }
    });
}

// Mantener idioma al recargar
window.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "es";
    changeLanguage(preferredLanguage);
});




// traducciones

// traducciones

const translations = {
    en: {
        page_title: "Personal Portfolio | Aniol Jordan",
        nav_home: "Home",
        nav_skills: "Skills",
        nav_about: "About Me",
        nav_portfolio: "Portfolio",
        nav_education: "Education & Certifications",
        linkedin: "LinkedIn",
        btn_contact: "Contact Me",
        email_copied: "Email copied to clipboard",

        greeting: "Hey, I am Aniol Jordan",
        role: "I am Full Stack Developer",
        main_desc: "I'm a Full Stack Developer focused on backend. I primarily work with Java, MySQL, Angular, HTML, and CSS to build solid and efficient applications. I use Git to maintain an organized workflow and collaborate with teams.",
        btn_education: "Education & Certifications",

        skills_title: "My Skills",
        skills_subtitle: "My Expertise",
        backend: "Backend",
        backend_desc: "I have been programming with Java for 2 years, developing robust and scalable applications. I work with frameworks like Spring Boot and focus on writing clean, efficient, and well-structured code.",
        frontend: "Frontend",
        frontend_desc: "I develop modern, dynamic web applications using Angular as my main framework. I combine it with TypeScript, HTML and CSS to create scalable, responsive and interactive user interfaces.",
        database: "Database",
        database_desc: "For my applications, I have used MySQL for data management and also implemented MongoDB in projects that require NoSQL databases.",
        utils: "Utils",
        utils_desc: "For planning, I have used tools like Trello and Figma, and for version control, I have worked with GitHub to manage and organize the development of the projects.",

        about_title: "About",
        about_subtitle: "About Me",
        about_desc: "I'm a passionate developer with a strong background in Cross-Platform Application Development. I have completed a Higher Education Program in this field, which has provided me with a solid technical foundation. During my professional internship, I worked as a programmer developing various applications, allowing me to apply my knowledge to real projects. Additionally, I am always looking to improve my skills. I have taken self-taught courses in Git, Visual Studio, HTML, CSS, and more to stay updated with the latest technologies and development practices. My goal is to continue learning, enhance my skills, and contribute to projects that challenge me to grow as a professional.",

        recent_projects: "Recent Projects",
        portfolio_title: "My Portfolio",

        project_rosella_title: "WEB APP FOR A BASKETBALL CLUB",
        project_rosella_desc: "Web application for a basketball club, developed using Java, Spring Boot, MySQL, and Angular. Also includes a mobile app built with Kotlin for managing a tournament organized by the club.",
        project_coffee_title: "MOBILE COFFEE APPLICATION",
        project_coffee_desc: "Application developed in Kotlin using Jetpack Compose, aimed at discovering the best and highest-rated coffee shops in your area or anywhere in the world.",
        project_erp_title: "ERP",
        project_erp_desc: "ERP for a furniture company, developed with Java, Spring Boot, MySQL, MongoDB, CSS, HTML, and JavaScript.",
        project_mgmtapps_title: "Management Applications",
        project_mgmtapps_desc: "Management Application developed with JavaFX, Java, and MySQL.",
        project_portfolio_title: "Personal Portfolio",
        project_portfolio_desc: "This is my personal portfolio developed with HTML and CSS.",
        view_github: "View in GitHub",

        made_by: "Made By Aniol Jordan",
        education_title: "Education",
education_subtitle: "My Studies",
smr_title: "SMR",
smr_desc: "Microcomputer Systems and Networks is a vocational training program where I learned to assemble, configure, and maintain computer systems and local networks, ensuring their functionality and connectivity.",
dam_title: "DAM",
dam_desc: "Multiplatform Application Development is a higher vocational training program where I learned to develop desktop and mobile applications, manage databases, and use technologies like Java, Spring Boot, and MySQL, applying agile methodologies in real projects.",
certificates_title: "Certificates",
certificates_backend: "Backend",
certificates_frontend: "Frontend",
java_intro: "Java: Introduction",
java_oop: "Java: Object-Oriented Programming",
java_mysql: "Java & MySQL",
spring_intro: "Introduction to Spring Framework",
springboot_fundamentals: "SpringBoot Fundamentals",
kotlin_cert: "Kotlin",
angular_cert: "Angular",
htmlcss_cert: "HTML & CSS",
view_openwebinars: "View in OpenWebinars",
    },
    es: {
        page_title: "Portafolio Personal | Aniol Jordan",
        nav_home: "Inicio",
        nav_skills: "Habilidades",
        nav_about: "Sobre Mí",
        nav_portfolio: "Portafolio",
        nav_education: "Educación y Certificaciones",
        linkedin: "LinkedIn",
        btn_contact: "Contáctame",
        email_copied: "Correo copiado al portapapeles",

        greeting: "Hola, soy Aniol Jordan",
        role: "Soy Desarrollador Full Stack",
        main_desc: "Soy un Desarrollador Full Stack enfocado en backend. Trabajo principalmente con Java, MySQL, Angular, HTML y CSS para construir aplicaciones sólidas y eficientes. Uso Git para mantener un flujo de trabajo organizado y colaborar con equipos.",
        btn_education: "Educación y Certificaciones",

        skills_title: "Mis Habilidades",
        skills_subtitle: "Mi Experiencia",
        backend: "Backend",
        backend_desc: "Llevo 2 años programando con Java, desarrollando aplicaciones robustas y escalables. Trabajo con frameworks como Spring Boot y me enfoco en escribir código limpio, eficiente y bien estructurado.",
        frontend: "Frontend",
        frontend_desc: "Desarrollo aplicaciones web modernas y dinámicas utilizando Angular como framework principal. Lo combino con TypeScript, HTML y CSS para crear interfaces de usuario escalables, responsivas e interactivas.",
        database: "Base de Datos",
        database_desc: "Para mis aplicaciones he utilizado MySQL para la gestión de datos y también he implementado MongoDB en proyectos que requieren bases de datos NoSQL.",
        utils: "Utilidades",
        utils_desc: "Para la planificación he utilizado herramientas como Trello y Figma, y para el control de versiones he trabajado con GitHub para gestionar y organizar el desarrollo de los proyectos.",

        about_title: "Sobre Mí",
        about_subtitle: "Sobre Mí",
        about_desc: "Soy un desarrollador apasionado con una sólida formación en Desarrollo de Aplicaciones Multiplataforma. He completado un ciclo formativo superior en este campo, lo que me ha proporcionado una sólida base técnica. Durante mis prácticas profesionales trabajé como programador desarrollando diversas aplicaciones, lo que me permitió aplicar mis conocimientos en proyectos reales. Además, siempre busco mejorar mis habilidades. He realizado cursos autodidactas en Git, Visual Studio, HTML, CSS y más para mantenerme actualizado con las últimas tecnologías y prácticas de desarrollo. Mi objetivo es seguir aprendiendo, mejorar mis habilidades y contribuir en proyectos que me desafíen a crecer como profesional.",

        recent_projects: "Proyectos Recientes",
        portfolio_title: "Mi Portafolio",

        project_rosella_title: "APP WEB PARA UN CLUB DE BALONCESTO",
        project_rosella_desc: "Aplicación web para un club de baloncesto, desarrollada usando Java, Spring Boot, MySQL y Angular. También incluye una aplicación móvil creada con Kotlin para gestionar un torneo organizado por el club.",
        project_coffee_title: "APLICACIÓN DE CAFETERÍAS",
        project_coffee_desc: "Aplicación desarrollada en Kotlin utilizando Jetpack Compose, diseñada para descubrir las mejores cafeterías y las mejor valoradas en tu zona o en cualquier parte del mundo.",
        project_erp_title: "ERP",
        project_erp_desc: "ERP para una empresa de muebles, desarrollado con Java, Spring Boot, MySQL, MongoDB, CSS, HTML y JavaScript.",
        project_mgmtapps_title: "Aplicaciones de Gestión",
        project_mgmtapps_desc: "Aplicación de gestión desarrollada con JavaFX, Java y MySQL.",
        project_portfolio_title: "Portafolio Personal",
        project_portfolio_desc: "Este es mi portafolio personal desarrollado con HTML y CSS.",
        view_github: "Ver en GitHub",

        made_by: "Hecho por Aniol Jordan",
        education_title: "Educación",
education_subtitle: "Mis Estudios",
smr_title: "SMR",
smr_desc: "Sistemas Microinformáticos y Redes es un ciclo formativo de grado medio donde aprendí a montar, configurar y mantener sistemas informáticos y redes locales, asegurando su funcionalidad y conectividad.",
dam_title: "DAM",
dam_desc: "Desarrollo de Aplicaciones Multiplataforma es un ciclo formativo de grado superior donde aprendí a desarrollar aplicaciones de escritorio y móviles, gestionar bases de datos y utilizar tecnologías como Java, Spring Boot y MySQL, aplicando metodologías ágiles en proyectos reales.",
certificates_title: "Certificados",
certificates_backend: "Backend",
certificates_frontend: "Frontend",
java_intro: "Java: Introducción",
java_oop: "Java: Programación Orientada a Objetos",
java_mysql: "Java & MySQL",
spring_intro: "Introducción a Spring Framework",
springboot_fundamentals: "Fundamentos de SpringBoot",
kotlin_cert: "Kotlin",
angular_cert: "Angular",
htmlcss_cert: "HTML & CSS",
view_openwebinars: "Ver en OpenWebinars",
    },
    ca: {
        page_title: "Portafoli Personal | Aniol Jordan",
        nav_home: "Inici",
        nav_skills: "Habilitats",
        nav_about: "Sobre Mi",
        nav_portfolio: "Portafoli",
        nav_education: "Educació i Certificats",
        linkedin: "LinkedIn",
        btn_contact: "Contacta'm",
        email_copied: "Correu copiat al porta-retalls",

        greeting: "Hola, sóc Aniol Jordan",
        role: "Sóc Desenvolupador Full Stack",
        main_desc: "Sóc un Desenvolupador Full Stack enfocat en backend. Treballo principalment amb Java, MySQL, Angular, HTML i CSS per construir aplicacions sòlides i eficients. Utilitzo Git per mantenir un flux de treball organitzat i col·laborar amb equips.",
        btn_education: "Educació i Certificats",

        skills_title: "Les Meves Habilitats",
        skills_subtitle: "La Meva Experiència",
        backend: "Backend",
        backend_desc: "Fa 2 anys que programo amb Java, desenvolupant aplicacions robustes i escalables. Treballo amb frameworks com Spring Boot i em centro en escriure codi net, eficient i ben estructurat.",
        frontend: "Frontend",
        frontend_desc: "Desenvolupo aplicacions web modernes i dinàmiques utilitzant Angular com a framework principal. El combino amb TypeScript, HTML i CSS per crear interfícies d'usuari escalables, responsives i interactives.",
        database: "Base de Dades",
        database_desc: "Per a les meves aplicacions he utilitzat MySQL per a la gestió de dades i també he implementat MongoDB en projectes que requereixen bases de dades NoSQL.",
        utils: "Utilitats",
        utils_desc: "Per a la planificació he utilitzat eines com Trello i Figma, i per al control de versions he treballat amb GitHub per gestionar i organitzar el desenvolupament dels projectes.",

        about_title: "Sobre Mi",
        about_subtitle: "Sobre Mi",
        about_desc: "Sóc un desenvolupador apassionat amb una sòlida formació en Desenvolupament d'Aplicacions Multiplataforma. He completat un cicle formatiu superior en aquest camp, el que m'ha proporcionat una sòlida base tècnica. Durant les meves pràctiques professionals vaig treballar com a programador desenvolupant diverses aplicacions, la qual cosa em va permetre aplicar els meus coneixements en projectes reals. A més, sempre busco millorar les meves habilitats. He realitzat cursos autodidactes en Git, Visual Studio, HTML, CSS i més per mantenir-me actualitzat amb les últimes tecnologies i pràctiques de desenvolupament. El meu objectiu és continuar aprenent, millorar les meves habilitats i contribuir en projectes que em desafien a créixer com a professional.",

        recent_projects: "Projectes Recents",
        portfolio_title: "El Meu Portafoli",

        project_rosella_title: "APP WEB PER A UN CLUB DE BÀSQUET",
        project_rosella_desc: "Aplicació web per a un club de bàsquet, desenvolupada amb Java, Spring Boot, MySQL i Angular. També inclou una aplicació mòbil creada amb Kotlin per gestionar un torneig organitzat pel club.",
        project_coffee_title: "APLICACIÓ DE CAFETERIES",
        project_coffee_desc: "Aplicació desenvolupada en Kotlin utilitzant Jetpack Compose, dissenyada per descobrir les millors cafeteries i les millor valorades a la teva zona o arreu del món.",
        project_erp_title: "ERP",
        project_erp_desc: "ERP per a una empresa de mobles, desenvolupat amb Java, Spring Boot, MySQL, MongoDB, CSS, HTML i JavaScript.",
        project_mgmtapps_title: "Aplicacions de Gestió",
        project_mgmtapps_desc: "Aplicació de gestió desenvolupada amb JavaFX, Java i MySQL.",
        project_portfolio_title: "Portafoli Personal",
        project_portfolio_desc: "Aquest és el meu portafoli personal desenvolupat amb HTML i CSS.",
        view_github: "Veure a GitHub",

        made_by: "Fet per Aniol Jordan",
        education_title: "Educació",
education_subtitle: "Els Meus Estudis",
smr_title: "SMR",
smr_desc: "Sistemes Microinformàtics i Xarxes és un cicle formatiu de grau mitjà on vaig aprendre a muntar, configurar i mantenir sistemes informàtics i xarxes locals, assegurant el seu funcionament i connectivitat.",
dam_title: "DAM",
dam_desc: "Desenvolupament d'Aplicacions Multiplataforma és un cicle formatiu de grau superior on vaig aprendre a desenvolupar aplicacions d'escriptori i mòbils, gestionar bases de dades i utilitzar tecnologies com Java, Spring Boot i MySQL, aplicant metodologies àgils en projectes reals.",
certificates_title: "Certificats",
certificates_backend: "Backend",
certificates_frontend: "Frontend",
java_intro: "Java: Introducció",
java_oop: "Java: Programació Orientada a Objectes",
java_mysql: "Java & MySQL",
spring_intro: "Introducció a Spring Framework",
springboot_fundamentals: "Fonaments de SpringBoot",
kotlin_cert: "Kotlin",
angular_cert: "Angular",
htmlcss_cert: "HTML & CSS",
view_openwebinars: "Veure a OpenWebinars",

    }
};

