const allProjects = [
    {
        name: "Movie",
        type: "personal",
        bg_image: "images/movieGif.gif",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/Movie/index.html",
        summary:
            "An online movie that gives information about movies and tvshows.",
        api: true,
        updating: 'yes'
    },
    {
        name: "Weather Forecast",
        type: "personal",
        bg_image: "images/weather.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/weather_condition/index.html",
        summary:
            "Shows current weather of a place and forecasts for the next 5 days",
        api: true,
    },
    {
        name: "Random Quiz",
        type: "personal",
        bg_image: "images/quiz.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/Quiz/index.html",
        summary:
            "Gives random question and shows answers at the end of each quiz",
        api: true,
    },
    {
        name: "Corona Update",
        type: "personal",
        bg_image: "images/covid.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/corona_update/index.html",
        summary:
            "Provides current covid condtion of a country, continent or global",
        api: true,
    },
    {
        name: "Random Quote",
        type: "personal",
        bg_image: "images/quote.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/random_quote/index.html",
        summary:
            "Shows random quotes",
        api: true,
    },
    {
        name: "Launch Countdown",
        type: "frontend",
        bg_image: "images/countdown.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/launch-countdown-timer-main/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/launch-countdown-timer-main",
        summary:
            "A static countdown website",
        api: false,
    },
    {
        name: "URL Shortening",
        type: "frontend",
        bg_image: "images/link_shortening.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/url-shortening-api-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/url-shortening-api-master",
        summary:
            "Long URls are always terrifying, this website provides the shorten form.",
        api: true,
    },
    {
        name: "Rest Countries",
        type: "frontend",
        bg_image: "images/rest_country.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/rest-countries-api-with-color-theme-switcher-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/rest-countries-api-with-color-theme-switcher-master",
        summary:
            "Get the easy information of a country.",
        api: true,
    },
    {
        name: "Static Job Landing",
        type: "frontend",
        bg_image: "images/job_listing.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/static-job-listings-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/static-job-listings-master",
        summary:
            "Filter static jobs based on your choice.",
        api: false,
    },
    {
        name: "Huddle Landing Page",
        type: "frontend",
        bg_image: "images/huddle.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/huddle-landing-page-with-curved-sections-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/huddle-landing-page-with-curved-sections-master",
        summary:
            "Look alike of a homepage",
        api: false,
    },
    {
        name: "Room HomePage Master",
        type: "frontend",
        bg_image: "images/room_homepage.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/room-homepage-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/room-homepage-master",
        summary:
            "Look alike of a home page with sliding animation.",
        api: false,
    },
    {
        name: "Insure Landing Page",
        type: "frontend",
        bg_image: "images/landing_page.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/insure-landing-page-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/insure-landing-page-master",
        summary:
            "A custom home page that gives little information about a website.",
        api: false,
    },
    {
        name: "Static Todo",
        type: "frontend",
        bg_image: "images/todo.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/todo-app-main/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/todo-app-main",
        summary:
            "Custom todo app to save your todo lists.",
        api: false,
    },
    {
        name: "Social Media Dashboard",
        type: "frontend",
        bg_image: "images/dashboard.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/social-media-dashboard-with-theme-switcher-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/social-media-dashboard-with-theme-switcher-master",
        summary:
            "Look alike of a user social dashboard, showing little information",
        api: false,
    },
    {
        name: "Social Proof Section",
        type: "frontend",
        bg_image: "images/social_proof.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/social-proof-section-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/social-proof-section-master",
        summary:
            "Get review from people helps our growth. This shows a what a custom page review looks like.",
        api: false,
    },
    {
        name: "FAQ Accordion",
        type: "frontend",
        bg_image: "images/FAQ.jpg",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/faq-accordion-card-main/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/faq-accordion-card-main",
        summary:
            "All commercial websites need a FAQ page. This is an example of one.",
        api: false,
    },
    {
        name: "Article Preview",
        type: "frontend",
        bg_image: "images/articleGif.gif",
        live:
            "https://blessing-olaleye-home-page.olaleye-blessing.vercel.app/frontendMentor/article-preview-component-master/index.html",
        github:
            "https://github.com/Olaleye-Blessing/Blessing_Olaleye_HomePage/tree/master/frontendMentor/article-preview-component-master",
        summary:
            "Well, this is my second practice. It is just a practice :)",
        api: false,
    },
];