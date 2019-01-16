//Imports
import CreateNewsView from '../view/NewsCardView.js';
import newsAPI from '../model/API.js';

export default function setupNews() {
    console.log("test");
    const newsHTML = '';
    const news = newsAPI();
    console.log("Pre-loop",typeof(news),typeof(news[0]));

    
    
    Object.keys(news).forEach(key => {
        newsHTML += CreateNewsView(item).render();
    })
    
    news.forEach(item => {
        console.log("In the loop",item);
        newsHTML += CreateNewsView(item).render();
    })
    
    return `
        <section class="d-flex justify-content-center">
            ${newsHTML}
        </section>
    `;
}

