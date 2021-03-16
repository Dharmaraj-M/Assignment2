import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { GetapiComponent } from './getapi/getapi.component';
import { PostapiComponent } from './postapi/postapi.component';

const routes: Routes = [
  {
    path: 'twowaybinding',
    component: TwowaybindingComponent
  },
  {
    path: 'getapi',
    component: GetapiComponent
  },
  {
    path: 'getapi/:id',
    component: GetapiComponent
  },
  {
    path: 'postapi',
    component: PostapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
