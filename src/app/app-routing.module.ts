import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CardsList from 'src/components/cards-list.component';
import { Main } from 'src/components/main.component';

const routes: Routes = [
  { path: '', component: Main},
  { path: 'cards-list', component: CardsList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
