import { Element } from './element.interface';

export class Screen implements IScreen {
    
    public active:boolean;
    public id: string;
    public className: string;

    constructor(id:string, active: boolean, className?:string) {
        this.id = id;
        this.active = active;
        this.className = className;
    }

    public show(){
        this.active = true;
    }

    public hide(){
        this.active = false;
    }
}

export interface IScreen extends Element {
    active: boolean;
    show(): void;
    hide(): void;
}