// ! Core Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NavSelectionComponent } from './Container/nav-selection/nav-selection.component';
import { IsoCodesSharedService } from './Component/ag-grid/Data/codes.shared.service';
// tslint:disable-next-line:max-line-length
import { AgGridSelectionStateSharedService } from './Component/ag-grid/ag-grid-selection-state/Shared/ag-grid-selection-state.shared.service';
import { HomeComponent } from './Container/home/home.component';
// tslint:disable-next-line:max-line-length
import { AgGridFilterSearchAutoSelectComponent } from './Component/ag-grid/ag-grid-filter-search-auto-select/ag-grid-filter-search-auto-select.component';
import { RxjsBasicsComponent } from './Component/rxjs/rxjs-basics/rxjs-basics.component';
import { ToggleSwapButtonsComponent } from './Component/ui/toggle-swap-buttons/toggle-swap-buttons.component';
import { DynamicFormComponent } from './Component/ng-antd/dynamic-form/dynamic-form.component';
import { BillTotalComponent } from './Component/mini-projects/bill-total/bill-total.component';
import { DynamicComponentsFirstAttemptComponent } from './Component/dynamic-components/dynamic-components-first-attempt/dynamic-components-first-attempt.component';
import { HelloComponent } from './Component/dynamic-components/dynamic-components-first-attempt/hello/hello.component';
import { DirectivesFirstAttemptComponent } from './Component/directives/directives-first-attempt/directives-first-attempt.component';
import { ChinaMobileParserComponent } from './Component/mini-projects/china-mobile-parser/china-mobile-parser.component';
import { ToDoListComponent } from './Component/mini-projects/to-do-list/to-do-list.component';
import { StringInterpolationComponent } from './Component/string-interpolation/string-interpolation.component';

const router: Routes = [
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
    },
    {
        path: 'ui-toggle-swap-buttons',
        component: ToggleSwapButtonsComponent
    },
    {
        path: 'ng-antd-dynamic-form',
        component: DynamicFormComponent
    },
    {
        path: 'mini-projects-bill-total',
        component: BillTotalComponent
    },
    {
        path: 'mini-projects-china-mobile',
        component: ChinaMobileParserComponent
    },
    {
        path: 'mini-projects-to-do-list',
        component: ToDoListComponent
    },
    {
        path: 'data-binding-string-interpolation',
        component: StringInterpolationComponent
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
        RxjsBasicsComponent,
        ToggleSwapButtonsComponent,
        DynamicFormComponent,
        BillTotalComponent,
        DynamicComponentsFirstAttemptComponent,
        HelloComponent,
        DirectivesFirstAttemptComponent,
        ChinaMobileParserComponent,
        ToDoListComponent,
        StringInterpolationComponent,
    ],
    imports: [
        // ! Core Angular Modules
        BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule, ReactiveFormsModule,
        RouterModule.forRoot(router),

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
