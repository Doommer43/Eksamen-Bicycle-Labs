//Imports
import News from '../model/News.js';

export function singleRender(news,size = 6){
    return `
            <article class="col-md-${size} col-sm-12 newsItem">
                <div class="card">
                    <div class="card-image">
                        <img src="${news.featured_image_src}" class="img-fluid"/>
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">${news.title}</h2>
                    </div>
                </div>
            </article>
        `;
}

export function featuredRender(news){
    return `
            <article class="col-12 newsItem">
                <div class="card">
                    <div class="card-image">
                        <img src="${news.featured_image_src}" class="img-fluid"/>
                    </div>
                    <div class="card-content">
                        <h2 class="card-titel">${news.title}</h2>
                        <p class="card-text">${news.excerpt}</p>
                    </div>
                </div>
            </article>
        `;
}

export default class CreateNewsView{
    constructor(news) {
        //Remakes the object
        this.news = new News(news);
    }


    render() {
        return `
            <article>
                <div class="card">
                    <div class="card-image">
                        <img src="${this.news.featured_image_src}"/>
                    </div>
                    <div class="card-content">
                        <p>${this.news.content}</p>
                    </div>
                </div>
            </article>
        `;
    }
}