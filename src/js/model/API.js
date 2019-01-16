//Import needed components
import News from './News.js';

export default function newsAPI() {
    const URL = 'http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/posts';
    let news = []
    fetch(URL)
        .then( Response => Response.json().then( item => {
            item.forEach(bicycle => {                
                news.push(new News(bicycle));
            });
        }))
        .catch( error => console.log(error));
        console.log("Finished getting",news);
    return news;
}