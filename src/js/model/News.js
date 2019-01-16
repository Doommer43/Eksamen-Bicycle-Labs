export default class News{
    constructor(news) {
        this.title = news['title']['rendered'];
        this.content = news['content']['rendered'];
        this.excerpt = news['excerpt']['rendered'];
        this.featured_image_src = news['featured_image_src'];
        this.featured_image_src_square = news['featured_image_src_square'];
    }
}