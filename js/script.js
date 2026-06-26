document.addEventListener('DOMContentLoaded', () => {
    // Efeito de Lanterna/Luz no Cursor
    const cursorGlow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.setProperty('--mouse-x', `${e.clientX}px`);
            cursorGlow.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });

        // Navbar blur effect on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.7)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.03)';
            navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-fade-up, .hidden-fade-in');
    hiddenElements.forEach(el => observer.observe(el));

    // Translation Logic
    const translations = {
        pt: {
            "nav-home": "Início", "nav-about": "Sobre", "nav-skills": "Skills", "nav-tech": "Tecnologias", "nav-projects": "Projetos", "nav-contact": "Contato",
            "hero-greeting": "Olá, o meu nome é", "hero-role": "Desenvolvedor de Software",
            "hero-bio": "Estudante de Análise e Desenvolvimento de Sistemas e Engenharia de Software. Proativo, apaixonado por tecnologia e em constante evolução no mundo do desenvolvimento.",
            "hero-btn1": "Ver Projetos", "hero-btn2": "Falar Comigo",
            "about-title": "Sobre <span>Mim</span>",
            "about-p1": "Olá! Tenho 21 anos e sou um desenvolvedor apaixonado por tecnologia e por aprender coisas novas. Atualmente, curso <strong>Engenharia de Software</strong> na Jala University e <strong>Análise e Desenvolvimento de Sistemas</strong> (Uniasselvi) para expandir cada vez mais a minha base técnica.",
            "about-p2": "Durante minha jornada, desenvolvi diversos projetos práticos, passando pela criação de APIs, desenvolvimento de jogos, e configuração de máquinas virtuais e servidores. Possuo conhecimentos sólidos em bancos de dados relacionais e não-relacionais, tendo o <strong>Java</strong> como a minha linguagem de programação favorita e foco principal.",
            "about-p3": "Valorizo muito o trabalho em equipe — habilidade que venho aprimorando ativamente através de projetos colaborativos na faculdade. Além da tecnologia, sou um grande entusiasta no aprendizado de idiomas e dedico boa parte da minha rotina ao estudo intensivo do Inglês.",
            "soft-title": "Soft Skills <span>& Idiomas</span>",
            "soft-en-title": "Inglês Técnico", "soft-en-badge": "Intermediário",
            "soft-en-desc": "Confortável com a leitura de documentações complexas, artigos técnicos e consumo de conteúdos internacionais.",
            "soft-colab-title": "Colaboração Ágil",
            "soft-colab-desc": "Experiência prática em equipes, revisões de código (code review) e alinhamento com práticas de Scrum.",
            "soft-com-title": "Comunicação Assertiva",
            "soft-com-desc": "Capacidade de transmitir ideias de forma clara e objetiva, interligando a lógica técnica com as necessidades do projeto.",
            "tech-title": "Tecnologias <span>& Ferramentas</span>",
            "tech-front": "🌐 Front-end", "tech-back": "💻 Back-end", "tech-db": "🗄️ Banco de Dados", "tech-tools": "🔧 Ferramentas",
            "proj-title": "Meus <span>Projetos</span>",
            "proj-pacman-desc": "Recriação funcional do jogo clássico Pac-Man (2026). Implementação de lógica de movimentação, colisão, e estados de jogo.",
            "proj-btn": "Ver no GitHub <i class=\"fa-brands fa-github\"></i>",
            "proj-loans-desc": "Sistema desktop para gestão de empréstimos bancários (2025) com conexão a banco de dados. Aplicação robusta de Orientação a Objetos e Design Patterns.",
            "proj-cis-desc": "API desenvolvida em Java e C# com integração aos bancos MongoDB e MySQL. Funciona como um fórum interativo, com funcionalidades para criação de tópicos e respostas de usuários.",
            "contact-title": "Entre em <span>Contato</span>",
            "contact-box1-title": "Vamos conversar!",
            "contact-box1-desc": "Estou aberto a novas oportunidades e projetos colaborativos. Sinta-se à vontade para me conectar nas redes ou mandar um e-mail.",
            "contact-box2-title": "Meu Currículo",
            "contact-box2-desc": "Quer saber mais sobre minha trajetória profissional e minhas qualificações? Baixe meu currículo completo em PDF.",
            "contact-btn-cv": "<i class=\"fa-solid fa-file-pdf\"></i> Baixar CV",
            "footer-text": "&copy; 2026 Izac Regis de Souza. Todos os direitos reservados."
        },
        en: {
            "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-tech": "Tech", "nav-projects": "Projects", "nav-contact": "Contact",
            "hero-greeting": "Hi, my name is", "hero-role": "Software Developer",
            "hero-bio": "Systems Analysis and Development, and Software Engineering student. Proactive, passionate about technology, and constantly evolving in the software development world.",
            "hero-btn1": "View Projects", "hero-btn2": "Contact Me",
            "about-title": "About <span>Me</span>",
            "about-p1": "Hi! I'm 21 years old and a developer passionate about technology and learning new things. Currently, I'm studying <strong>Software Engineering</strong> at Jala University and <strong>Systems Analysis and Development</strong> (Uniasselvi) to continuously expand my technical foundation.",
            "about-p2": "During my journey, I have developed various practical projects, ranging from API creation and game development to the configuration of virtual machines and servers. I have solid knowledge of both relational and non-relational databases, with <strong>Java</strong> being my favorite programming language and main focus.",
            "about-p3": "I highly value teamwork—a skill I've been actively refining through collaborative projects at university. Beyond technology, I'm a great enthusiast of learning languages and dedicate a good part of my routine to studying English.",
            "soft-title": "Soft Skills <span>& Languages</span>",
            "soft-en-title": "Technical English", "soft-en-badge": "Intermediate",
            "soft-en-desc": "Comfortable reading complex documentation, technical articles, and consuming international content.",
            "soft-colab-title": "Agile Collaboration",
            "soft-colab-desc": "Practical experience in teams, code reviews, and alignment with Scrum practices.",
            "soft-com-title": "Assertive Communication",
            "soft-com-desc": "Ability to convey ideas clearly and objectively, connecting technical logic with project needs.",
            "tech-title": "Technologies <span>& Tools</span>",
            "tech-front": "🌐 Front-end", "tech-back": "💻 Back-end", "tech-db": "🗄️ Database", "tech-tools": "🔧 Tools",
            "proj-title": "My <span>Projects</span>",
            "proj-pacman-desc": "Functional recreation of the classic Pac-Man game (2026). Implementation of movement logic, collision, and game states.",
            "proj-btn": "View on GitHub <i class=\"fa-brands fa-github\"></i>",
            "proj-loans-desc": "Desktop system for bank loan management (2025) with database connection. Robust application of Object Orientation and Design Patterns.",
            "proj-cis-desc": "API developed in Java and C# with MongoDB and MySQL integration. Functions as an interactive forum, featuring functionalities for creating topics and user replies.",
            "contact-title": "Get in <span>Touch</span>",
            "contact-box1-title": "Let's talk!",
            "contact-box1-desc": "I'm open to new opportunities and collaborative projects. Feel free to connect with me on social media or send an email.",
            "contact-box2-title": "My Resume",
            "contact-box2-desc": "Want to know more about my professional journey and qualifications? Download my full resume in PDF.",
            "contact-btn-cv": "<i class=\"fa-solid fa-file-pdf\"></i> Download CV",
            "footer-text": "&copy; 2026 Izac Regis de Souza. All rights reserved."
        }
    };

    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnPt.classList.remove('active');
            document.documentElement.lang = 'en';
        } else {
            btnPt.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'pt-BR';
        }
    }

    if (btnPt && btnEn) {
        btnPt.addEventListener('click', () => setLanguage('pt'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }
});
