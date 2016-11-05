import $ = require('jquery');

export class NavigationController {

    private $element: any;
    private $anchors: any;
    private activeClass: string = 'active';
    private activeScreen: string;

    constructor(elementId: string, activeScreen: string) {
        this.$element = $(`#${elementId}`);
        this.activeScreen = activeScreen;
    }

    public init() {
        this.cache();
        this.initEvents();
        this.setSelected();
    }

    public cache() {
        this.$anchors = $('a', this.$element);
    }

    private initEvents() {
        // let anchor: any =
        //     let nav = this;

        // anchor.on('click', ($event: any) => {
        //     $event.preventDefault();

        //     let $this = $($event.currentTarget);
        //     let $parent = $this.parent('li');

        //     if ($parent.hasClass(nav.activeClass)) {
        //         return false;
        //     }

        //     $('li', nav.element).removeClass(nav.activeClass);
        //     $parent.addClass(nav.activeClass);
        // })
    }

    public setSelected() {
        let selected = this.$anchors.filter((index: number, el: any) => {
            return el.getAttribute('data-mv-target') == this.activeScreen
        })[0];
        
        selected.parentNode.className = this.activeClass;
    }
}