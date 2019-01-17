//Imports
import CreateNewsView from '../view/NewsCardView.js';
import newsAPI from '../model/API.js';
import { singleRender, featuredRender } from '../view/NewsCardView.js';

export default function setupNews() {
    const newsTitle = `
        <section class="d-flex justify-content-center text-center row col-8 m-auto" id="">
        <article class="col-12">
        <h2>Nyheder</h2>
        <p>Loram ipsum</p>
        </article>
        <section id="featured" class="col-6">
        </section>
        <section id="news" class="d-flex flex-wrap col-6"></section>
        <button class="btn btn-danger" id="morenews">hello</button>
    `;
    document.getElementById('maincontent').insertAdjacentHTML('beforeend',newsTitle);

    //Add eventlistener to button
    document.getElementById('morenews').addEventListener("click", () => {
        moreNews(newsAPI());
    });

    console.log("Pre");
    newNews(newsAPI());

/*
    let newsHTML = '';
    const news = newsAPI();
    console.log("Pre-loop",typeof(news),news);

    
    news.forEach(item => {
        console.log("In the loop",item);
        newsHTML += CreateNewsView(item).render();
    })
    console.log(newsHTML)
    return `        
            ${newsHTML}
        </section>
    `;
    */
}

export function newNews(news){
    let newsHTML = '';
    news.then(response => {
        featuredNews(response.shift());
        let arr = [];
        arr = response.slice(0,4);        
        arr.forEach(item => {
            newsHTML += singleRender(item);
            // console.log("html",newsHTML)
        });
        document.getElementById('news').innerHTML += newsHTML;    
    })
}

function moreNews(news){
    console.log("Event")
    let newsHTML = '';
    news.then(response => {
        let arr = response.slice(5);
        response.forEach(item => {
            newsHTML += singleRender(item,3);
            // console.log("html",newsHTML)
        });
        let templateHTML = `
        <section class="d-flex flex-wrap col-12">
        ${newsHTML}
        </section>
    `;
        document.getElementById('morenews').insertAdjacentHTML('beforebegin', templateHTML);
    });
}

function featuredNews(news) {
    let rendered = featuredRender(news);
    document.getElementById('featured').innerHTML = rendered;
}

