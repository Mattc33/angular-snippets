import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

    text: string = ''
    list: Array<{}> = []

    constructor() { }

    addNewItem(): void {
        if ( this.text !== '' ) {
            this.list.push({text: this.text})
        } else {
            console.log('input is empty')
        }
    }

    deleteItem(index: number): void {
        const removeItem = this.list.indexOf(index)
        this.list.splice(removeItem, 1)
    }

}

// ! https://medium.com/@blondiebytes/how-to-use-angular-directives-2777a16dd757