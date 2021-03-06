//Import needed components
import News from './News.js';
//API for news return an array of all news
export default function newsAPI() {
    const URL = 'http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/posts';
    return fetch(URL,)
        .then( Response => Response.json().then( item => {
            let news = []
            item.forEach(bicycle => {                
                news.push(new News(bicycle));
            });
            console.log(news)
            return news;
        }))
        .catch( error => console.log(error));
}