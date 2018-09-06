import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Post } from './post.model'
import * as PostActions from './post.actions'

interface AppState {
    post: Post
}

@Component({
  selector: 'app-ngrx-post',
  templateUrl: './ngrx-post.component.html',
  styleUrls: ['./ngrx-post.component.scss']
})
export class NgrxPostComponent {

    post: Observable<Post>
    text: string

    constructor(private _store: Store<AppState>) { 
        this.post = this._store.select('post')
    }

    editText() {
        this._store.dispatch(new PostActions.EditText(this.text))
    }

    resetPost() {
        this._store.dispatch(new PostActions.Reset())
    }

    upvote() {
        this._store.dispatch(new PostActions.Upvote())
    }

    downvote() {
        this._store.dispatch(new PostActions.Downvote())
    }
}
