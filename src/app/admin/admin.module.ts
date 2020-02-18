import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminRoutingModule } from './admin-routing.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    AdminRoutingModule
  ],
  declarations: [AdminMainComponent],
  exports: [AdminMainComponent]
})
export class AdminModule { }