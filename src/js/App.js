//Import needed files
import newsAPI from './model/API.js'
import setupNews from './controller/NewsController.js';

class App {
    constructor() {
        //Header
        const headerHTML = `
            <div class ="d-flex justify-content-center">
                <header>
                    <section class="d-inline-block">
                        <h1>Bicycle Innovation Lab</h1>
                        <p>loram ipsum</p>
                        <button>Bliv medlem</button>
                    </section>
                    <section class="d-inline-block">
                        <img src="./src//assets/jumbotron.gif"/>
                    </section>
                </header>
            </div>
            <main id="maincontent">
            `;
        //Insert header
        document.body.insertAdjacentHTML('beforeend', headerHTML);

        //Create and insert news
        const newsSectionHTML = setupNews();

        document.getElementById('maincontent').append(newsSectionHTML);

        //Footer
        const FooterHTML = `
            </main>
            <!-- Footer -->
            <footer class="d-flex justify-content-around">
                <section class="d-inline-block">
                    <h3>Projekter & tilbud</h3>
                    <ul>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                    </ul>
                </section>
                <section class="d-inline-block">
                <h3>Om os</h3>
                    <ul>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                        <li>
                        <a href="#">Filler</a>
                        </li>
                    </ul>
                </section>
                <section class="d-inline-block">
                <h3>Kontakt</h3>
                    <ul>
                        <li>
                        <p>address</p>
                        </li>
                        <li>
                        <p>address</p>
                        </li>
                        <li>
                        <p>address</p>
                        </li>
                        <li>
                        <p>address</p>
                        </li>
                    </ul>
                </section>
            </footer>
        `;

        document.body.insertAdjacentHTML('beforeend', FooterHTML);
    }
}

//Starts a new app when content is loaded
document.addEventListener('DOMContentLoaded', () => new App());