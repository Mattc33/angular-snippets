import { Component, OnInit, Type, ComponentFactoryResolver } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-dynamic-components-first-attempt',
  templateUrl: './dynamic-components-first-attempt.component.html',
  styleUrls: ['./dynamic-components-first-attempt.component.scss']
})
export class DynamicComponentsFirstAttemptComponent implements OnInit {

    constructor(
        private _factoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {

    }

    createHelloComponent(component) {
        
    }

}
