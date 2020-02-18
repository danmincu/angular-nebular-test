import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { UserMainComponent } from './user-main/user-main.component';
import { CustomerRoutingModule } from './customer-routing.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    CustomerRoutingModule
  ],
  declarations: [UserMainComponent],
  exports: [UserMainComponent]
})
export class CustomerModule { }