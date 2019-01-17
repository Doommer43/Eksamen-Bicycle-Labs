//Imports
import News from '../model/News.js';

export function singleRender(news){
    return `
            <article class="col-3">
                <div class="card">
                    <div class="card-image">
                        <img src="${news.featured_image_src}"/>
                    </div>
                    <div class="card-content">
                        <p>${news.content}</p>
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