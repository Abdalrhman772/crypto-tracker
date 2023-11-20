import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'coins-list', pathMatch: 'full' },
  { path: 'coins-list', component: CoinsListComponent },
  { path: 'coin-details/:id', component: CoinDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
