import $ = require('jquery');
import 'bootstrap/dist/js/bootstrap';
import { AppConfig } from './app.config';
import { App } from './app.controller';

let config: AppConfig = {
    nav: {
        id: 'app-navigation'
    },
    search: {
        id: 'js-search__form'
    },
    view: {
        id: 'app-view-container',
    },
    screenClass: 'page-view',
    activeScreen: 'new'

}

new App(config).init();