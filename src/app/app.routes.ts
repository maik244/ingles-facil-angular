import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaTemas } from './pages/lista-temas/lista-temas';


import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: ListaTemas },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}