import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
  <h1>Property Binding is surrounded by [], a wrapper around attributes</h1>
  <p>Any native html attribute can be binded, as well as custom ones</p>
  <button [disabled]="toggleButton">Button will disable in 2s</button>
  `
})
export class PropertyBindingComponent {

    // ? In this example the disabled attribute of the button goes from not disabled(false) to 
    // ? disabled disabled(true) after 2000ms

    toggleButton = false

    constructor() {
        setTimeout( () => {
            this.toggleButton = !this.toggleButton
        }, 2000)
    }
}

// ! property binding 
// square brackets indicate to angular that we want to use property binding []
