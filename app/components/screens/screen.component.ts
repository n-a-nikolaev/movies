import { Screen, IScreen } from '../../shared';


export class ScreenController {
    private screens: Array<IScreen>;

    private screenClass: string;
    private activeScreen: string;
    private active: IScreen;

    constructor(screenClass: string, activeScreen: string) {
        this.screenClass = screenClass;
        this.activeScreen = activeScreen;
    }

    public init() {
        this.screens = this.getScreens();
        this.active = this.filterActive();
    }

    public filterActive(): IScreen {
        let active = this.screens.filter((screen: IScreen) => {
            return screen.active;
        })[0];

        return active;
    }

    public getActive(): IScreen {
        return this.active;
    }
    private getScreens(): Array<IScreen> {
        let screenArr: Array<IScreen> = [];

        $(`.${this.screenClass}`).each((index: number, el: any) => {
            let active = el.getAttribute('data-view') == this.activeScreen;
            let id = el.id || '';
            let className = el.className || '';

            let screen = new Screen(id, active, className);

            screenArr.push(screen);
        });

        return screenArr;
    }
}