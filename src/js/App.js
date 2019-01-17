//Import needed files
import newsAPI from './model/API.js'
import setupNews from './controller/NewsController.js';

class App {
    constructor() {
        //Header
        const headerHTML = `
            <section class="d-flex justify-content-center col-8 m-auto">
                <header>
                    <section class="d-inline-block">
                        <h1>Bicycle Innovation Lab</h1>
                        <p>loram ipsum</p>
                        <button class="btn btn-danger">Bliv medlem</button>
                    </section>
                    <section class="d-inline-block">
                        <img src="./src//assets/jumbotron.gif"/>
                    </section>
                </header>
            </section>
            <main id="maincontent" class="text-center">
            `;
        //Insert header
        document.body.insertAdjacentHTML('beforeend', headerHTML);

        //Create and insert news
        setupNews();

        //Footer
        const FooterHTML = `
            </main>
            <!-- Footer -->
            <footer class="d-flex justify-content-between col-8 m-auto">
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