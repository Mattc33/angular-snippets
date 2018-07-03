import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-selection',
  templateUrl: './nav-selection.component.html',
  styleUrls: ['./nav-selection.component.scss']
})
export class NavSelectionComponent {
    selectedValue;

    constructor(
        private _router: Router
    ) {

    }

    navigationHandler(e) {
        this._router.navigate([`${e}`]);
    }
}
