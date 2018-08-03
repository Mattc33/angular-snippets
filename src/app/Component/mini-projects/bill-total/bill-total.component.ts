import { Component, OnInit } from '@angular/core';

import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.scss']
})
export class BillTotalComponent implements OnInit {

    constructor(
        private _papa: Papa
    ) { }

    ngOnInit() {
    }

    uploadBtnHandler(e) {
        this.csvToJson(e.target.files[0]);
    }

    csvToJson(csvfile) {
        const papaOptions = {
            complete: (results, file) => {
                const data = results.data;
                console.log('Parsed: ', data, file);
            }
        };
        this._papa.parse(csvfile, papaOptions);
    }

}
