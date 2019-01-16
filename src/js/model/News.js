export default class News{
    constructor(news) {
        this.title = news.title;
        this.content = news.content;
        this.excerpt = news.excerpt;
        this.featured_image_src = news.featured_image_src;
    }
}