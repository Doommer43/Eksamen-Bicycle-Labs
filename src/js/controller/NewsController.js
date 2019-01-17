//Imports
import newsAPI from '../model/API.js';
import { singleRender, featuredRender } from '../view/NewsCardView.js';
//Run in app on start
export default function setupNews() {
    const newsTitle = `
        <section class="d-flex justify-content-center text-center row col-md-8 col-sm-12 m-auto" id="">
        <article class="col-12">
        <h2>Nyheder</h2>
        <p>Følg med i hvad der sket af spændende og nyskabende ting ved Bicycle Innovation Lab. Føl med i hvad der sker og få nyheder på mail eller se arkivet for at se hvad det tidligere er sket.</p>
        </article>
        <section id="featured" class="col-md-6 col-sm-12">
        </section>
        <section id="news" class="d-flex flex-wrap col-md-6 col-sm-12"></section>
        <button type="button" class="btn border-primary my-3 text-primary" id="morenews">Vis flere</button>
    `;
    //Inserts empty news shells
    document.getElementById('maincontent').insertAdjacentHTML('beforeend',newsTitle);

    //Add eventlistener to button
    document.getElementById('morenews').addEventListener("click", () => {
        moreNews(newsAPI());
    });
    //Loads the first five news
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
//Loads inital five news articles
function newNews(news){
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
//Loads all but the initial five news articles
function moreNews(news){
    console.log("Event")
    let newsHTML = '';
    news.then(response => {
        let arr = response.slice(5);
        arr.forEach(item => {
            newsHTML += singleRender(item,3);
            // console.log("html",newsHTML)
        });
        let templateHTML = `
        <section class="d-flex flex-wrap col-12 pt-2">
        ${newsHTML}
        </section>
    `;
        let button = document.getElementById('morenews')
        button.insertAdjacentHTML('beforebegin', templateHTML);
        button.remove();
    });
}
//Special function for featured news
function featuredNews(news) {
    let rendered = featuredRender(news);
    document.getElementById('featured').innerHTML = rendered;
}

