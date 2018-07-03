// ! Core Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

// ! Third Party Components
import { AgGridModule } from 'ag-grid-angular';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

// ! Containers
import { AppComponent } from './app.component';
import { LayoutComponent } from './Container/layout/layout.component';
import { HeaderComponent } from './Container/header/header.component';
import { ContentComponent } from './Container/content/content.component';

// ! Components
// ? AG Grid Examples
import { AgGridSelectionStateComponent } from './Component/ag-grid/ag-grid-selection-state/ag-grid-selection-state.component';
import { SiblingOneComponent } from './Component/ag-grid/ag-grid-selection-state/sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './Component/ag-grid/ag-grid-selection-state/sibling-two/sibling-two.component';
import { NavSelectionComponent } from './Component/project-component/nav-selection/nav-selection.component';
import { IsoCodesSharedService } from './Component/ag-grid/Data/codes.shared.service';
// tslint:disable-next-line:max-line-length
import { AgGridSelectionStateSharedService } from './Component/ag-grid/ag-grid-selection-state/Shared/ag-grid-selection-state.shared.service';
import { HomeComponent } from './Component/project-component/home/home.component';
// tslint:disable-next-line:max-line-length
import { AgGridFilterSearchAutoSelectComponent } from './Component/ag-grid/ag-grid-filter-search-auto-select/ag-grid-filter-search-auto-select.component';
import { RxjsBasicsComponent } from './Component/rxjs/rxjs-basics/rxjs-basics.component';

const ag_grid_selection_state_router: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ag-grid-selection-state-component',
        component: AgGridSelectionStateComponent,
        children: [
            {
                path: 'ag-grid-selection-state-sibling-one',
                component: SiblingOneComponent
            },
            {
                path: 'ag-grid-selection-state-sibling-two',
                component: SiblingTwoComponent
            }
        ]
    },
    {
        path: 'ag-grid-filter-search-auto-select',
        component: AgGridFilterSearchAutoSelectComponent
    },
    {
        path: 'rxjs-basics',
        component: RxjsBasicsComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        ContentComponent,
        AgGridSelectionStateComponent,
        SiblingOneComponent,
        SiblingTwoComponent,
        NavSelectionComponent,
        HomeComponent,
        AgGridFilterSearchAutoSelectComponent,
        RxjsBasicsComponent
    ],
    imports: [
        // ! Core Angular Modules
        BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule,
        RouterModule.forRoot(ag_grid_selection_state_router),

        // ! Third Party Components
        AgGridModule.withComponents([]), NgZorroAntdModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        IsoCodesSharedService,
        AgGridSelectionStateSharedService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
    ]
})
export class AppModule { }
