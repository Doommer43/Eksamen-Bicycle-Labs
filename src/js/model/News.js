export default class News{
    constructor(news) {
        this.title = news.title.rendered || news['title']['rendered'] || news.title; 
        this.content = news.content.rendered || news['content']['rendered'] || news.content;
        this.excerpt = news.excerpt.rendered || news['excerpt']['rendered'] || 'test';
        this.featured_image_src = news.featured_image_src || news['featured_image_src'];
        this.featured_image_src_square = news.featured_image_src_square || news['featured_image_src_square'];
    }
}