import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {ItemsComponent} from './items/items.component';

const routes: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ViewComponent, ItemsComponent]