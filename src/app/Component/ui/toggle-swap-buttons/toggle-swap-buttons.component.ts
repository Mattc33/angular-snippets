import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-swap-buttons',
  templateUrl: './toggle-swap-buttons.component.html',
  styleUrls: ['./toggle-swap-buttons.component.scss']
})
export class ToggleSwapButtonsComponent {

    expandBtn = false;
    collaspeBtn = true;

    toggleSwapButtonsHandler(type) {
        if ( type === 'expand' ) {
            this.swap();
            this.doSomeAction();
        }
        if ( type === 'collaspe' ) {
            this.swap();
            this.doSomeOtherAction();
        }
    }

    swap() {
        this.expandBtn = !this.expandBtn;
        this.collaspeBtn = !this.collaspeBtn;
    }

    doSomeAction() {
        console.log('Doing some thing');
    }

    doSomeOtherAction() {
        console.log('Doing some other thing');
    }

}
