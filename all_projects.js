const allProjectsCont = document.querySelector(".all__projects");

const allProjects = [
    {
        name: "Movie",
        type: "personal",
        bg_image: "images/movieGif.gif",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/Movie/index.html",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
        api: true,
    },
    {
        name: "Random Quiz",
        type: "personal",
        bg_image: "images/quiz.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/Quiz/index.html",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
        api: true,
    },
    {
        name: "Corona Update",
        type: "personal",
        bg_image: "images/covid.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/corona_update/index.html",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
        api: true,
    },
    {
        name: "Random Quote",
        type: "personal",
        bg_image: "images/quote.jpg",
        live:
            "https://personal-trials-git-master.olaleye-blessing.vercel.app/random_quote/index.html",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima molestias sint labore dolore odit nemo, expedita ipsam corporis",
        api: false,
    },
];

// console.log(allProjects.length);

function createListContainer(list) {
    let githubRep = list.type !== "personal" ? list.github : "";
    let li = document.createElement("li");
    li.classList.add("all__projects-list");
    li.setAttribute("data-all-project-source", list.type);
    li.innerHTML = `
        <a href="${list.live}" class="all__projects-list-img-link">
            <figure style="background-image: url('${list.bg_image}');" class="all__projects-list-img">
            </figure>
        </a>
        `;
    let listSub = document.createElement("div");
    listSub.classList.add("all__projects-list-sub");
    listSub.innerHTML = `
        <h3>${list.name}</h3>
        <div>
            <a data-link="github" href="${githubRep}">
                <figure aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </figure>
            </a>
            <a data-link="live" href="${list.live}">
                <figure aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                </figure>
            </a>
        </div>
        <p class="all__projects-list-summary">${list.summary}</p>
        `;
    let listTech = document.createElement('div');
    if (list.api || list.updating) {
        listTech.classList.add('all__projects-list-tech');
        listSub.append(listTech);
    }
    if (list.api) {
        listTech.innerHTML +=  `<mark>api</mark>`
    }
    if (list.updating) {
        listTech.innerHTML += `<mark class="updating">updating</mark>`;
    }
    li.append(listSub);
    return li;
}

function loadList() {
    for (let project of allProjects) {
        let li = createListContainer(project);
        allProjectsCont.append(li);
    }
}

loadList();
