import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-china-mobile-parser',
  templateUrl: './china-mobile-parser.component.html',
  styleUrls: ['./china-mobile-parser.component.scss']
})
export class ChinaMobileParserComponent implements OnInit {

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
