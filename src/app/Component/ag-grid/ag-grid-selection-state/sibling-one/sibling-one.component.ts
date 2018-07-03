import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid';

import { IsoCodesSharedService } from '../../Data/codes.shared.service';
import { AgGridSelectionStateSharedService } from './../Shared/ag-grid-selection-state.shared.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.scss']
})
export class SiblingOneComponent implements OnInit {

    // * row data and column definitions
    rowData;
    columnDefs;

    // * gridApi & gridUI props
    gridApi: GridApi;

    // ? Shared selection value
    ratecardViewerSelectedCountry: string;

    constructor(
        private _countryCodes: IsoCodesSharedService,
        private _countrySharedService: AgGridSelectionStateSharedService
    ) {
        this.columnDefs = this.createColumnDefs();
    }

    ngOnInit() {
        this.rowData = this._countryCodes.getCountryCodes();
    }

    // ================================================================================
    // * AG Grid Init
    // ================================================================================
    createColumnDefs(): any {
        return [
            {
                headerName: 'Country', field: 'country', width: 230,
                checkboxSelection: true,
            }
        ];
    }

    onGridReady(params): void {
        this.gridApi = params.api;
        this.initCountrySelection();
    }

    // ================================================================================
    // * Grid UI Interactions
    // ================================================================================
    selectionChanged(): void {
        const selectedNode = this.gridApi.getSelectedNodes();
        this._countrySharedService.countryObjChange(selectedNode[0].id);
    }

    initCountrySelection(): void {
        this._countrySharedService.countryObjCurrent.subscribe(
            rowNode => this.gridApi.getRowNode(`${rowNode}`).setSelected(true)
        );
    }

}
