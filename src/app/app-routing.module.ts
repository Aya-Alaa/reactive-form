import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './components/my-form/my-form.component';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: MyFormComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
