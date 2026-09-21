// ==========================================
// ILM MARKAZI — FULL JAVASCRIPT
// UZ / RU / EN
// TELEGRAM + NETLIFY FUNCTIONS
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// ==========================================
// LANGUAGE SWITCHER
// ==========================================

const languageBox = document.createElement("div");

languageBox.className = "language-switcher";

languageBox.innerHTML = `
    <button type="button" data-language="uz" class="lang-btn active">
        UZ
    </button>

    <button type="button" data-language="ru" class="lang-btn">
        RU
    </button>

    <button type="button" data-language="en" class="lang-btn">
        EN
    </button>
`;

if (navMenu && navMenu.parentElement) {
    navMenu.parentElement.appendChild(languageBox);
}


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {

    // ======================================
    // UZBEK
    // ======================================

    uz: {

        // NAVBAR
        home: "Bosh sahifa",
        courses: "Kurslar",
        teachers: "Ustozlar",
        about: "Biz haqimizda",
        contact: "Aloqa",

        // HERO
        badge: "🚀 Kelajagingiz uchun eng yaxshi tanlov",

        heroTitle:
            "Kelajagingiz shu yerdan boshlanadi!",

        heroText:
            "Ilm Markazi — zamonaviy metodika, tajribali ustozlar va sifatli ta'limni birlashtirgan o'quv markazi.",

        coursesButton:
            "Kurslarni ko'rish →",

        contactButton:
            "Bog'lanish",

        statCourses:
            "Kurslar",

        statQuality:
            "Sifatli ta'lim",

        statSupport:
            "Qo'llab-quvvatlash",

        cardTitle:
            "ILM MARKAZI",

        cardText:
            "Bilim oling. Rivojlaning. Kelajagingizni yarating.",

        cardBottom:
            "Ta'lim • Rivojlanish • Natija",


        // ABOUT
        aboutLabel:
            "Biz haqimizda",

        aboutTitle:
            "Bilim bilan kelajakni yaratamiz",

        aboutText:
            "Ilm Markazi zamonaviy o'quv markazi bo'lib, o'quvchilarga sifatli ta'lim berishni maqsad qilgan.",

        experiencedTeachers:
            "Tajribali ustozlar",

        experiencedText:
            "Har bir fan bo'yicha malakali va tajribali mutaxassislar bilan ishlaymiz.",

        modernMethod:
            "Zamonaviy metodika",

        modernText:
            "Darslarda zamonaviy va samarali o'qitish usullaridan foydalanamiz.",

        qualityEducation:
            "Sifatli ta'lim",

        qualityText:
            "Maqsadimiz — har bir o'quvchiga sifatli bilim va rivojlanish imkoniyatini berish.",


        // COURSES
        coursesLabel:
            "Bizning kurslarimiz",

        coursesTitle:
            "O'zingizga mos kursni tanlang",

        coursesText:
            "Bilimingizni oshiring va yangi imkoniyatlar sari qadam qo'ying.",

        english:
            "Ingliz tili",

        englishText:
            "Ingliz tilini zamonaviy metodika orqali o'rganing.",

        russian:
            "Rus tili",

        russianText:
            "Rus tilida erkin muloqot qilishni o'rganing.",

        arabic:
            "Arab tili",

        arabicText:
            "Arab tilini bosqichma-bosqich o'rganing.",

        mathematics:
            "Matematika",

        mathematicsText:
            "Matematik bilimlaringizni yanada rivojlantiring.",

        drawing:
            "Chizmachilik",

        drawingText:
            "Chizmachilik asoslari va amaliy ko'nikmalar.",

        it:
            "IT kurslari",

        itText:
            "Zamonaviy IT texnologiyalarini o'rganing.",

        frontend:
            "Frontend",

        frontendText:
            "Web saytlar yaratishni noldan o'rganing.",

        more:
            "Batafsil →",


        // TEACHERS
        teachersLabel:
            "Bizning ustozlarimiz",

        teachersTitle:
            "Sizga yordam beradigan mutaxassislar",

        teacherTitle1:
            "Tajribali ustozlar",

        teacherText1:
            "Har bir fan bo'yicha malakali mutaxassislar.",

        teacherTitle2:
            "Sifatli ta'lim",

        teacherText2:
            "Zamonaviy metodika asosida tashkil etilgan darslar.",


        // CTA
        startToday:
            "🚀 Bugunoq boshlang",

        ctaTitle:
            "Kelajagingizni birga quramiz!",

        ctaText:
            "O'zingiz uchun mos kursni tanlang va bilim olishni boshlang.",

        enroll:
            "Kursga yozilish →",


        // CONTACT
        contactLabel:
            "Bog'lanish",

        contactTitle:
            "Biz bilan aloqaga chiqing",

        phone:
            "Telefon",

        instagram:
            "Instagram",

        telegram:
            "Telegram",

        telegramChannel:
            "Telegram kanal",

        namePlaceholder:
            "Ismingiz",

        phonePlaceholder:
            "Telefon raqamingiz",

        selectCourse:
            "Kursni tanlang",

        messagePlaceholder:
            "Xabaringiz...",

        sendApplication:
            "Ariza yuborish →",

        formEmpty:
            "Iltimos, barcha kerakli maydonlarni to'ldiring.",

        formSuccess:
            "Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",

        formError:
            "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",


        // FOOTER
        footerText:
            "Bilim oling. Rivojlaning. Kelajagingizni yarating.",

        copyright:
            "© 2026 ILM MARKAZI | Barcha huquqlar himoyalangan."

    },


    // ======================================
    // RUSSIAN
    // ======================================

    ru: {

        home:
            "Главная",

        courses:
            "Курсы",

        teachers:
            "Преподаватели",

        about:
            "О нас",

        contact:
            "Контакты",

        badge:
            "🚀 Лучший выбор для вашего будущего",

        heroTitle:
            "Ваше будущее начинается здесь!",

        heroText:
            "Ilm Markazi — образовательный центр, объединяющий современные методики, опытных преподавателей и качественное образование.",

        coursesButton:
            "Посмотреть курсы →",

        contactButton:
            "Связаться",

        statCourses:
            "Курсов",

        statQuality:
            "Качественное обучение",

        statSupport:
            "Поддержка",

        cardTitle:
            "ILM MARKAZI",

        cardText:
            "Получайте знания. Развивайтесь. Создавайте своё будущее.",

        cardBottom:
            "Образование • Развитие • Результат",


        // ABOUT
        aboutLabel:
            "О нас",

        aboutTitle:
            "Создаём будущее с помощью знаний",

        aboutText:
            "Ilm Markazi — современный образовательный центр, главная цель которого — дать учащимся качественное образование.",

        experiencedTeachers:
            "Опытные преподаватели",

        experiencedText:
            "Мы работаем с квалифицированными и опытными специалистами по каждому предмету.",

        modernMethod:
            "Современная методика",

        modernText:
            "На занятиях используются современные и эффективные методы обучения.",

        qualityEducation:
            "Качественное образование",

        qualityText:
            "Наша цель — дать каждому ученику качественные знания и возможности для развития.",


        // COURSES
        coursesLabel:
            "Наши курсы",

        coursesTitle:
            "Выберите подходящий курс",

        coursesText:
            "Расширяйте свои знания и делайте шаг навстречу новым возможностям.",

        english:
            "Английский язык",

        englishText:
            "Изучайте английский язык с помощью современных методик.",

        russian:
            "Русский язык",

        russianText:
            "Научитесь свободно общаться на русском языке.",

        arabic:
            "Арабский язык",

        arabicText:
            "Изучайте арабский язык шаг за шагом.",

        mathematics:
            "Математика",

        mathematicsText:
            "Развивайте и улучшайте свои математические знания.",

        drawing:
            "Черчение",

        drawingText:
            "Основы черчения и практические навыки.",

        it:
            "IT-курсы",

        itText:
            "Изучайте современные IT-технологии.",

        frontend:
            "Frontend",

        frontendText:
            "Научитесь создавать веб-сайты с нуля.",

        more:
            "Подробнее →",


        // TEACHERS
        teachersLabel:
            "Наши преподаватели",

        teachersTitle:
            "Специалисты, которые помогут вам",

        teacherTitle1:
            "Опытные преподаватели",

        teacherText1:
            "Квалифицированные специалисты по каждому предмету.",

        teacherTitle2:
            "Качественное обучение",

        teacherText2:
            "Занятия организованы на основе современных методик.",


        // CTA
        startToday:
            "🚀 Начните уже сегодня",

        ctaTitle:
            "Давайте вместе построим ваше будущее!",

        ctaText:
            "Выберите подходящий курс и начните получать знания.",

        enroll:
            "Записаться на курс →",


        // CONTACT
        contactLabel:
            "Контакты",

        contactTitle:
            "Свяжитесь с нами",

        phone:
            "Телефон",

        instagram:
            "Instagram",

        telegram:
            "Telegram",

        telegramChannel:
            "Telegram канал",

        namePlaceholder:
            "Ваше имя",

        phonePlaceholder:
            "Ваш номер телефона",

        selectCourse:
            "Выберите курс",

        messagePlaceholder:
            "Ваше сообщение...",

        sendApplication:
            "Отправить заявку →",

        formEmpty:
            "Пожалуйста, заполните все необходимые поля.",

        formSuccess:
            "Ваша заявка принята! Мы свяжемся с вами в ближайшее время.",

        formError:
            "Произошла ошибка. Пожалуйста, попробуйте ещё раз.",


        // FOOTER
        footerText:
            "Получайте знания. Развивайтесь. Создавайте своё будущее.",

        copyright:
            "© 2026 ILM MARKAZI | Все права защищены."

    },


    // ======================================
    // ENGLISH
    // ======================================

    en: {

        home:
            "Home",

        courses:
            "Courses",

        teachers:
            "Teachers",

        about:
            "About Us",

        contact:
            "Contact",

        badge:
            "🚀 The best choice for your future",

        heroTitle:
            "Your future starts here!",

        heroText:
            "Ilm Markazi is an educational center that combines modern teaching methods, experienced teachers and quality education.",

        coursesButton:
            "View Courses →",

        contactButton:
            "Contact Us",

        statCourses:
            "Courses",

        statQuality:
            "Quality Education",

        statSupport:
            "Support",

        cardTitle:
            "ILM MARKAZI",

        cardText:
            "Learn. Develop. Create your future.",

        cardBottom:
            "Education • Development • Results",


        // ABOUT
        aboutLabel:
            "About Us",

        aboutTitle:
            "We build the future through knowledge",

        aboutText:
            "Ilm Markazi is a modern educational center focused on providing students with quality education.",

        experiencedTeachers:
            "Experienced Teachers",

        experiencedText:
            "We work with qualified and experienced specialists in every subject.",

        modernMethod:
            "Modern Methodology",

        modernText:
            "Our lessons use modern and effective teaching methods.",

        qualityEducation:
            "Quality Education",

        qualityText:
            "Our goal is to provide every student with quality knowledge and opportunities for development.",


        // COURSES
        coursesLabel:
            "Our Courses",

        coursesTitle:
            "Choose the right course for you",

        coursesText:
            "Improve your knowledge and take a step towards new opportunities.",

        english:
            "English",

        englishText:
            "Learn English using modern teaching methods.",

        russian:
            "Russian",

        russianText:
            "Learn to communicate freely in Russian.",

        arabic:
            "Arabic",

        arabicText:
            "Learn Arabic step by step.",

        mathematics:
            "Mathematics",

        mathematicsText:
            "Improve and develop your mathematical knowledge.",

        drawing:
            "Technical Drawing",

        drawingText:
            "Learn the basics of technical drawing and practical skills.",

        it:
            "IT Courses",

        itText:
            "Learn modern IT technologies.",

        frontend:
            "Frontend",

        frontendText:
            "Learn how to create websites from scratch.",

        more:
            "Learn More →",


        // TEACHERS
        teachersLabel:
            "Our Teachers",

        teachersTitle:
            "Specialists who will help you",

        teacherTitle1:
            "Experienced Teachers",

        teacherText1:
            "Qualified specialists in every subject.",

        teacherTitle2:
            "Quality Education",

        teacherText2:
            "Lessons are organized using modern teaching methods.",


        // CTA
        startToday:
            "🚀 Start Today",

        ctaTitle:
            "Let's build your future together!",

        ctaText:
            "Choose the right course for you and start learning.",

        enroll:
            "Enroll Now →",


        // CONTACT
        contactLabel:
            "Contact",

        contactTitle:
            "Get in touch with us",

        phone:
            "Phone",

        instagram:
            "Instagram",

        telegram:
            "Telegram",

        telegramChannel:
            "Telegram Channel",

        namePlaceholder:
            "Your name",

        phonePlaceholder:
            "Your phone number",

        selectCourse:
            "Choose a course",

        messagePlaceholder:
            "Your message...",

        sendApplication:
            "Send Application →",

        formEmpty:
            "Please fill in all required fields.",

        formSuccess:
            "Your application has been received! We will contact you soon.",

        formError:
            "Something went wrong. Please try again.",


        // FOOTER
        footerText:
            "Learn. Develop. Create your future.",

        copyright:
            "© 2026 ILM MARKAZI | All rights reserved."

    }

};


// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage(lang) {

    const t = translations[lang];

    if (!t) return;


    // ======================================
    // HTML LANGUAGE
    // ======================================

    document.documentElement.lang = lang;


    // ======================================
    // NAVBAR
    // ======================================

    const navTranslation = {

        home: t.home,
        courses: t.courses,
        teachers: t.teachers,
        about: t.about,
        contact: t.contact

    };


    document.querySelectorAll("nav a").forEach(link => {

        const key = link.dataset.lang;

        if (key && navTranslation[key]) {
            link.textContent = navTranslation[key];
        }

    });


    // ======================================
    // HERO
    // ======================================

    const badge =
        document.querySelector(".badge");

    if (badge) {
        badge.textContent = t.badge;
    }


    const heroTitle =
        document.querySelector(".hero h1");


    if (heroTitle) {

        if (lang === "uz") {

            heroTitle.innerHTML =
                `Kelajagingiz <span>shu yerdan</span> boshlanadi!`;

        }

        if (lang === "ru") {

            heroTitle.innerHTML =
                `Ваше <span>будущее</span> начинается здесь!`;

        }

        if (lang === "en") {

            heroTitle.innerHTML =
                `Your <span>future</span> starts here!`;

        }

    }


    const heroText =
        document.querySelector(".hero-text > p");

    if (heroText) {
        heroText.textContent = t.heroText;
    }


    const heroButtons =
        document.querySelectorAll(".hero-buttons .btn");


    if (heroButtons[0]) {
        heroButtons[0].textContent =
            t.coursesButton;
    }


    if (heroButtons[1]) {
        heroButtons[1].textContent =
            t.contactButton;
    }


    // ======================================
    // STATS
    // ======================================

    const stats =
        document.querySelectorAll(".stats small");


    if (stats[0]) {
        stats[0].textContent =
            t.statCourses;
    }

    if (stats[1]) {
        stats[1].textContent =
            t.statQuality;
    }

    if (stats[2]) {
        stats[2].textContent =
            t.statSupport;
    }


    // ======================================
    // HERO CARD
    // ======================================

    const cardTitle =
        document.querySelector(".hero-card h3");

    const cardText =
        document.querySelector(".hero-card p");

    const cardBottom =
        document.querySelector(".hero-card span");


    if (cardTitle) {
        cardTitle.textContent =
            t.cardTitle;
    }

    if (cardText) {
        cardText.textContent =
            t.cardText;
    }

    if (cardBottom) {
        cardBottom.textContent =
            t.cardBottom;
    }


    // ======================================
    // SECTION TITLES
    // ======================================

    const sectionTitles =
        document.querySelectorAll(".section-title");


    // ABOUT
    if (sectionTitles[0]) {

        const el =
            sectionTitles[0];

        const label =
            el.querySelector("span");

        const title =
            el.querySelector("h2");

        const text =
            el.querySelector("p");


        if (label) {
            label.textContent =
                t.aboutLabel;
        }


        if (title) {

            if (lang === "uz") {

                title.innerHTML =
                    `Bilim bilan kelajakni <b>yaratamiz</b>`;

            }

            if (lang === "ru") {

                title.innerHTML =
                    `Создаём <b>будущее</b> с помощью знаний`;

            }

            if (lang === "en") {

                title.innerHTML =
                    `We build the <b>future</b> through knowledge`;

            }

        }


        if (text) {
            text.textContent =
                t.aboutText;
        }

    }


    // COURSES
    if (sectionTitles[1]) {

        const el =
            sectionTitles[1];

        const label =
            el.querySelector("span");

        const title =
            el.querySelector("h2");

        const text =
            el.querySelector("p");


        if (label) {
            label.textContent =
                t.coursesLabel;
        }


        if (title) {

            if (lang === "uz") {

                title.innerHTML =
                    `O'zingizga mos <b>kursni tanlang</b>`;

            }

            if (lang === "ru") {

                title.innerHTML =
                    `Выберите <b>подходящий курс</b>`;

            }

            if (lang === "en") {

                title.innerHTML =
                    `Choose the <b>right course</b> for you`;

            }

        }


        if (text) {
            text.textContent =
                t.coursesText;
        }

    }


    // TEACHERS
    if (sectionTitles[2]) {

        const el =
            sectionTitles[2];

        const label =
            el.querySelector("span");

        const title =
            el.querySelector("h2");


        if (label) {
            label.textContent =
                t.teachersLabel;
        }


        if (title) {

            if (lang === "uz") {

                title.innerHTML =
                    `Sizga yordam beradigan <b>mutaxassislar</b>`;

            }

            if (lang === "ru") {

                title.innerHTML =
                    `Специалисты, которые <b>помогут вам</b>`;

            }

            if (lang === "en") {

                title.innerHTML =
                    `Specialists who will <b>help you</b>`;

            }

        }

    }


    // CONTACT
    if (sectionTitles[3]) {

        const el =
            sectionTitles[3];

        const label =
            el.querySelector("span");

        const title =
            el.querySelector("h2");


        if (label) {
            label.textContent =
                t.contactLabel;
        }


        if (title) {

            if (lang === "uz") {

                title.innerHTML =
                    `Biz bilan <b>aloqaga chiqing</b>`;

            }

            if (lang === "ru") {

                title.innerHTML =
                    `Свяжитесь <b>с нами</b>`;

            }

            if (lang === "en") {

                title.innerHTML =
                    `Get <b>in touch with us</b>`;

            }

        }

    }


    // ======================================
    // ABOUT BOXES
    // ======================================

    const aboutBoxes =
        document.querySelectorAll(".about-box");


    if (aboutBoxes[0]) {

        const h3 =
            aboutBoxes[0].querySelector("h3");

        const p =
            aboutBoxes[0].querySelector("p");


        if (h3) {
            h3.textContent =
                t.experiencedTeachers;
        }

        if (p) {
            p.textContent =
                t.experiencedText;
        }

    }


    if (aboutBoxes[1]) {

        const h3 =
            aboutBoxes[1].querySelector("h3");

        const p =
            aboutBoxes[1].querySelector("p");


        if (h3) {
            h3.textContent =
                t.modernMethod;
        }

        if (p) {
            p.textContent =
                t.modernText;
        }

    }


    if (aboutBoxes[2]) {

        const h3 =
            aboutBoxes[2].querySelector("h3");

        const p =
            aboutBoxes[2].querySelector("p");


        if (h3) {
            h3.textContent =
                t.qualityEducation;
        }

        if (p) {
            p.textContent =
                t.qualityText;
        }

    }


    // ======================================
    // COURSES
    // ======================================

    const courseCards =
        document.querySelectorAll(".course-card");


    const courseData = [

        {
            title: t.english,
            text: t.englishText
        },

        {
            title: t.russian,
            text: t.russianText
        },

        {
            title: t.arabic,
            text: t.arabicText
        },

        {
            title: t.mathematics,
            text: t.mathematicsText
        },

        {
            title: t.drawing,
            text: t.drawingText
        },

        {
            title: t.it,
            text: t.itText
        },

        {
            title: t.frontend,
            text: t.frontendText
        }

    ];


    courseCards.forEach((card, index) => {

        if (!courseData[index]) {
            return;
        }


        const h3 =
            card.querySelector("h3");

        const p =
            card.querySelector("p");

        const a =
            card.querySelector("a");


        if (h3) {
            h3.textContent =
                courseData[index].title;
        }

        if (p) {
            p.textContent =
                courseData[index].text;
        }

        if (a) {
            a.textContent =
                t.more;
        }

    });


    // ======================================
    // TEACHERS
    // ======================================

    const teacherCards =
        document.querySelectorAll(".teacher-card");


    if (teacherCards[0]) {

        const h3 =
            teacherCards[0].querySelector("h3");

        const p =
            teacherCards[0].querySelector("p");


        if (h3) {
            h3.textContent =
                t.teacherTitle1;
        }

        if (p) {
            p.textContent =
                t.teacherText1;
        }

    }


    if (teacherCards[1]) {

        const h3 =
            teacherCards[1].querySelector("h3");

        const p =
            teacherCards[1].querySelector("p");


        if (h3) {
            h3.textContent =
                t.teacherTitle2;
        }

        if (p) {
            p.textContent =
                t.teacherText2;
        }

    }


    // ======================================
    // CTA
    // ======================================

    const cta =
        document.querySelector(".cta");


    if (cta) {

        const span =
            cta.querySelector("span");

        const h2 =
            cta.querySelector("h2");

        const p =
            cta.querySelector("p");

        const button =
            cta.querySelector("a");


        if (span) {
            span.textContent =
                t.startToday;
        }

        if (h2) {
            h2.textContent =
                t.ctaTitle;
        }

        if (p) {
            p.textContent =
                t.ctaText;
        }

        if (button) {
            button.textContent =
                t.enroll;
        }

    }


    // ======================================
    // CONTACT
    // ======================================

    const contactItems =
        document.querySelectorAll(".contact-item");


    if (contactItems[0]) {

        const small =
            contactItems[0].querySelector("small");

        if (small) {
            small.textContent =
                t.phone;
        }

    }


    if (contactItems[1]) {

        const small =
            contactItems[1].querySelector("small");

        if (small) {
            small.textContent =
                t.instagram;
        }

    }


    if (contactItems[2]) {

        const small =
            contactItems[2].querySelector("small");

        const link =
            contactItems[2].querySelector("a");


        if (small) {
            small.textContent =
                t.telegram;
        }

        if (link) {
            link.textContent =
                t.telegramChannel;
        }

    }


    // ======================================
    // FORM
    // ======================================

    const nameInput =
        document.getElementById("name");

    const phoneInput =
        document.getElementById("phone");

    const courseSelect =
        document.getElementById("course");

    const messageInput =
        document.getElementById("message");

    const submitButton =
        document.querySelector("#contactForm button");


    if (nameInput) {
        nameInput.placeholder =
            t.namePlaceholder;
    }


    if (phoneInput) {
        phoneInput.placeholder =
            t.phonePlaceholder;
    }


    if (messageInput) {
        messageInput.placeholder =
            t.messagePlaceholder;
    }


    if (submitButton) {
        submitButton.textContent =
            t.sendApplication;
    }


    if (courseSelect) {

        if (courseSelect.options[0]) {
            courseSelect.options[0].textContent =
                t.selectCourse;
        }


        const options =
            courseSelect.options;


        if (options[1]) {
            options[1].textContent =
                t.english;
        }

        if (options[2]) {
            options[2].textContent =
                t.russian;
        }

        if (options[3]) {
            options[3].textContent =
                t.arabic;
        }

        if (options[4]) {
            options[4].textContent =
                t.mathematics;
        }

        if (options[5]) {
            options[5].textContent =
                t.drawing;
        }

        if (options[6]) {
            options[6].textContent =
                t.it;
        }

        if (options[7]) {
            options[7].textContent =
                t.frontend;
        }

    }


    // ======================================
    // FOOTER
    // ======================================

    const footer =
        document.querySelector("footer");


    if (footer) {

        const paragraphs =
            footer.querySelectorAll("p");


        if (paragraphs[0]) {
            paragraphs[0].textContent =
                t.footerText;
        }


        if (paragraphs[1]) {
            paragraphs[1].textContent =
                t.copyright;
        }

    }


    // ======================================
    // SAVE LANGUAGE
    // ======================================

    try {

        localStorage.setItem(
            "ilmLanguage",
            lang
        );

    } catch (error) {

        console.warn(
            "Language storage error:",
            error
        );

    }


    // ======================================
    // ACTIVE LANGUAGE BUTTON
    // ======================================

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.remove("active");


            if (
                button.dataset.language === lang
            ) {

                button.classList.add("active");

            }

        });

}


// ==========================================
// LANGUAGE BUTTON CLICK
// ==========================================

document
    .querySelectorAll(".lang-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;

                applyLanguage(language);

            }
        );

    });


// ==========================================
// TELEGRAM FORM
// ==========================================
// FORM → NETLIFY FUNCTION → TELEGRAM
// ==========================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            // Sahifa yangilanmasin
            event.preventDefault();

            // Boshqa submit handlerlar aralashmasin
            event.stopImmediatePropagation();


            // ==================================
            // FORM ELEMENTS
            // ==================================

            const nameInput =
                document.getElementById("name");

            const phoneInput =
                document.getElementById("phone");

            const courseSelect =
                document.getElementById("course");

            const messageInput =
                document.getElementById("message");


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";

            const course =
                courseSelect
                    ? courseSelect.value
                    : "";

            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            // ==================================
            // CURRENT LANGUAGE
            // ==================================

            let currentLanguage = "uz";


            try {

                currentLanguage =
                    localStorage.getItem(
                        "ilmLanguage"
                    ) || "uz";

            } catch (error) {

                currentLanguage = "uz";

            }


            const t =
                translations[currentLanguage] ||
                translations.uz;


            // ==================================
            // VALIDATION
            // ==================================

            if (
                !name ||
                !phone ||
                !course
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        t.formEmpty;

                    formMessage.className =
                        "err";

                }

                return;

            }


            // ==================================
            // SUBMIT BUTTON
            // ==================================

            const submitButton =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            const oldButtonText =
                submitButton
                    ? submitButton.textContent
                    : t.sendApplication;


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Yuborilmoqda...";

            }


            // ==================================
            // CLEAR OLD MESSAGE
            // ==================================

            if (formMessage) {

                formMessage.textContent =
                    "";

                formMessage.className =
                    "";

            }


            // ==================================
            // SEND TO NETLIFY FUNCTION
            // ==================================

            try {

                const response =
                    await fetch(
                        "/.netlify/functions/telegram",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({

                                name:
                                    name,

                                phone:
                                    phone,

                                course:
                                    course,

                                message:
                                    message

                            })

                        }
                    );


                // ==================================
                // READ RESPONSE
                // ==================================

                let result = null;


                try {

                    result =
                        await response.json();

                } catch (jsonError) {

                    result = null;

                }


                // ==================================
                // CHECK RESULT
                // ==================================

                if (
                    !response.ok ||
                    !result ||
                    !result.success
                ) {

                    console.error(
                        "Telegram Function error:",
                        result
                    );

                    throw new Error(
                        "Telegramga yuborilmadi"
                    );

                }


                // ==================================
                // SUCCESS
                // ==================================

                if (formMessage) {

                    formMessage.textContent =
                        t.formSuccess;

                    formMessage.className =
                        "ok";

                }


                // Formani tozalash
                contactForm.reset();


            } catch (error) {

                console.error(
                    "Form error:",
                    error
                );


                // ==================================
                // ERROR
                // ==================================

                if (formMessage) {

                    formMessage.textContent =
                        t.formError;

                    formMessage.className =
                        "err";

                }

            } finally {

                // ==================================
                // ENABLE BUTTON
                // ==================================

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        t.sendApplication ||
                        oldButtonText;

                }

            }

        },

        // CAPTURE = true
        // premium.js dagi eski submit handler
        // bo'lsa ham bu handler birinchi ishlaydi.
        true

    );

}


// ==========================================
// HEADER SHADOW
// ==========================================

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.querySelector(".header");


        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.06)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


// ==========================================
// LANGUAGE SWITCHER STYLE
// ==========================================

const languageStyle =
    document.createElement("style");


languageStyle.textContent = `

.language-switcher {

    display: flex;

    align-items: center;

    gap: 5px;

    margin-left: 20px;

}


.lang-btn {

    border: 1px solid #ddd;

    background: white;

    color: #555;

    padding: 7px 10px;

    border-radius: 8px;

    font-size: 11px;

    font-weight: 800;

    cursor: pointer;

    transition: .25s;

}


.lang-btn:hover {

    color: #e50914;

    border-color: #e50914;

}


.lang-btn.active {

    background: #e50914;

    border-color: #e50914;

    color: white;

}


.lang-btn:disabled {

    opacity: .6;

    cursor: not-allowed;

}


@media (max-width: 900px) {

    .language-switcher {

        position: absolute;

        right: 70px;

        top: 20px;

        margin: 0;

    }

}


@media (max-width: 600px) {

    .language-switcher {

        right: 60px;

        top: 21px;

        gap: 3px;

    }


    .lang-btn {

        padding: 6px 7px;

        font-size: 10px;

    }

}

`;

document.head.appendChild(
    languageStyle
);


// ==========================================
// LOAD SAVED LANGUAGE
// ==========================================

let savedLanguage = "uz";


try {

    savedLanguage =
        localStorage.getItem(
            "ilmLanguage"
        ) || "uz";

} catch (error) {

    savedLanguage = "uz";

}


applyLanguage(
    savedLanguage
);


// ==========================================
// END OF SCRIPT
// ==========================================
