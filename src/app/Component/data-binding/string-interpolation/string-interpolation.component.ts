import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: `{{string}}`
})
export class StringInterpolationComponent{
    string: string = 'String Interpolation'
}
