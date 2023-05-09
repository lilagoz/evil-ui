import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component'; // CLI imports router

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: '**', redirectTo: 'reactive-form' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
