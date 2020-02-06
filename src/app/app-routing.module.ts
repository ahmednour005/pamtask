import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'details/:anything', redirectTo: '/', pathMatch: 'full' },
    {path:':anything', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  