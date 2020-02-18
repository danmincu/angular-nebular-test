import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { RouterModule,Routes } from '@angular/router'; 

import { NbThemeModule } from '@nebular/theme';
import { CustomerModule} from './customer/customer.module'
import { AdminModule} from './admin/admin.module'

import { NbLayoutModule, NbButtonModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';


import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' }
// ];

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    NbThemeModule.forRoot(),
    CustomerModule,
    AdminModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    AppRoutingModule
    //RouterModule.forRoot(routes) 
    ],
    declarations: [ AppComponent, HelloComponent  ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
