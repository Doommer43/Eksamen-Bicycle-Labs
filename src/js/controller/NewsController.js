//Imports
import CreateNewsView from '../view/NewsCardView.js';
import newsAPI from '../model/API.js';
import { singleRender } from '../view/NewsCardView.js';

export default function setupNews() {
    const newsTitle = `
        <section class="d-flex justify-content-center align-self-center row col-8" id="news">
        <div class="col-12">
        <h2>Nyheder</h2>
        <p>Loram ipsum</p>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend',newsTitle);
    console.log("Pre")
    return updateNews(newsAPI());

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

export function updateNews(news){
    console.log("test")
    let newsHTML = '';
    console.log("Pre-loop",typeof(news),news);
    news.then(response => {
        console.log(response);
        response.forEach(item => {
            console.log("In the loop",item);
            newsHTML += singleRender(item);
            // console.log("html",newsHTML)
        });
        console.log("Out",newsHTML)
        document.getElementById('news').innerHTML += newsHTML;
    return `        
            ${newsHTML}
        </section>
    `;
    })
    
    
    
}

