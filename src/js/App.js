//Import needed files
import setupNews from './controller/NewsController.js';

class App {
    constructor() {
        //Header
        const headerHTML = `
            <section class="d-flex flex-wrap justify-content-between col-md-8 col-sm-12 m-auto">
                <header>
                    <section class="d-inline-block align-middle col-md-6 col-sm-12">
                        <h1>Bicycle Innovation Lab</h1>
                        <p>Forening med cykelbibliotek, værksted og forskellige innovative cykelprojekter til fremme for cykelkulturen, o cyklen som det miljørigtige og sunde alternativ til bilen</p>
                        <button type="button" class="btn btn-primary">Bliv medlem</button>
                    </section>
                    <section class="d-inline-block col-md-5 col-sm-12">
                        <img src="./src//assets/jumbotron.gif" class="img-fluid"/>
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
            <footer class="border-top pt-4 my-md-5 pt-md-5 d-flex flex-wrap justify-content-between col-md-8 col-sm-12 m-auto">
                <section class="d-inline-block col-md-4 col-sm-12">
                    <h3>Projekter & tilbud</h3>
                    <ul class="list-unstyled">
                        <li>
                        <a class="text-muted" href="#">Cykelbibliotek</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Værksted</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Arrangementer</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">The Good City: Udstilling</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Undervisning</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Rådgivning</a>
                        </li>
                    </ul>
                </section>
                <section class="d-inline-block col-md-4 col-sm-12">
                <h3>Om os</h3>
                    <ul class="list-unstyled">
                        <li>
                        <a class="text-muted" href="#">Bestyrelsen</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Vedtægter</a>
                        </li>
                        <li>
                        <a class="text-muted" href="#">Vilkår</a>
                        </li>
                    </ul>
                </section>
                <section class="d-inline-block col-md-4 col-sm-12">
                <h3>Kontakt</h3>
                    <ul class="list-unstyled">
                        <li>
                        <p class="text-muted">Bicycle Innovation Lab</p>
                        </li>
                        <li>
                        <p class="text-muted">Prags boulevard ved sportshallen Prismen</p>
                        </li>
                        <li>
                        <p class="text-muted">Holmbladsgade 71</p>
                        </li>
                        <li>
                        <p class="text-muted">2300 København S</p>
                        </li>
                    </ul>

                    <ul>
                    <p>Ligebanan</p>
                    <li>
                    <p>2017-2018</p>
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