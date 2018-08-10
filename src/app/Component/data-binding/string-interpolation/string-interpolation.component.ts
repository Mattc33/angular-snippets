import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  template: `
  <h1>String Interpolation is surrounded by double curly brackets</h1>
  <p>Anything that results in a string can be placed inside, variables, function return...</p>
  {{string}}`
})
export class StringInterpolationComponent{
    string: string = 'String Interpolation'
}

// ! string interpolation
// One way data binding, data flows one way
