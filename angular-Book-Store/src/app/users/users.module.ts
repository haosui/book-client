import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {BreadcrumbModule } from 'primeng/breadcrumb';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        CheckboxModule,
        RadioButtonModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        TabViewModule,
        PasswordModule,
        BreadcrumbModule,
        CalendarModule,
        InputNumberModule,
        DropdownModule,
        DialogModule,
        FormsModule,

    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
       
    ]
})
export class UsersModule { }