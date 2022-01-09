import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {path: 'addEntry', component : SearchBarComponent},
  {path: 'history', component : HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
