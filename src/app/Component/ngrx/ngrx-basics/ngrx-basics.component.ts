import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

interface AppState {
    message: string
}

@Component({
  selector: 'app-ngrx-basics',
  templateUrl: './ngrx-basics.component.html',
  styleUrls: ['./ngrx-basics.component.scss']
})
export class NgrxBasicsComponent {

    message$: Observable<string>

    constructor(
        private _store: Store<AppState>
    ) { 
        this.message$ = this._store.select('message')
    }

    spanishMessage() {
        this._store.dispatch({type: 'SPANISH'})
    }

    frenchMessage() {
        this._store.dispatch({type: 'FRENCH'})
    }

}
