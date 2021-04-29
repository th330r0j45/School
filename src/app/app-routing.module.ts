import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HousesComponent } from './components/houses/houses.component';

const routes: Routes = [
  {path: '', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponent = [HousesComponent, CharactersComponent];
