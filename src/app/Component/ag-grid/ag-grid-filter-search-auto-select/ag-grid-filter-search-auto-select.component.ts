import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid';
import { IsoCodesSharedService } from '../Data/codes.shared.service';

@Component({
  selector: 'app-ag-grid-filter-search-auto-select',
  templateUrl: './ag-grid-filter-search-auto-select.component.html',
  styleUrls: ['./ag-grid-filter-search-auto-select.component.scss']
})
export class AgGridFilterSearchAutoSelectComponent implements OnInit {

    // * row data and column definitions
    rowData;
    columnDefs;

    // * gridApi & gridUI props
    gridApi: GridApi;

    constructor(
        private _countryCodes: IsoCodesSharedService
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
    }

    // ================================================================================
    // * Grid UI Interactions
    // ================================================================================
    filterChanged(): void {
        const rowCount = this.gridApi.getDisplayedRowCount();
        if ( rowCount === 1 ) {
            const firstRowId = this.gridApi.getDisplayedRowAtIndex(0).id;
            this.gridApi.getRowNode(`${firstRowId}`).setSelected(true);
        }
    }

}
