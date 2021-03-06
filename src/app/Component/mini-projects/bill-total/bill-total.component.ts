import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.scss']
})
export class BillTotalComponent implements OnInit {

    constructor(
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
    }

}
