import { AppConfig } from './app.config';
import { Element, IScreen, Screen } from './shared';

import { NavigationController } from './components/navigation/navigation.component';
import { ScreenController } from './components/screens/screen.component';

export class App {
    public nav: Element;
    public search: Element;
    public view: Element;

    public screenClass: string;
    public activeScreen: string;

    constructor(config: AppConfig) {
        this.nav = config.nav;
        this.search = config.search;
        this.view = config.view;
        this.screenClass = config.screenClass;
        this.activeScreen = config.activeScreen;
    }

    public init() {
        let navigation = new NavigationController(this.nav.id, this.activeScreen);
        let screenCtrl = new ScreenController(this.screenClass, this.activeScreen);

        navigation.init();
        screenCtrl.init();
    }
}