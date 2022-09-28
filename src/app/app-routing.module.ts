import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitcardComponent } from './debitcard/debitcard.component';

const routes: Routes = [
  { path: '', component:DebitcardComponent, pathMatch: 'full' },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
