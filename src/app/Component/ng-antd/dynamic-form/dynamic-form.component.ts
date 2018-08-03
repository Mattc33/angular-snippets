import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
    private exampleForm: FormGroup;

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {
        this.initFormGroup();
    }

    initFormGroup() {
        this.exampleForm = this._fb.group({
            exampleFormArray: this._fb.array([this.buildFormGroup()])
        });
    }

    buildFormGroup() {
        return this._fb.group({
            exampleInput: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.exampleForm.controls['exampleFormArray'];
        control.push(this.buildFormGroup());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.exampleForm.controls['exampleFormArray'];
        control.removeAt(i);
    }
}
