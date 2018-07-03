import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AgGridSelectionStateSharedService {

    countryObjSource = new BehaviorSubject<string>('0');
    countryObjCurrent = this.countryObjSource.asObservable();

    countryObjChange(countryRowNode: string) {
        this.countryObjSource.next(countryRowNode);
    }
}

