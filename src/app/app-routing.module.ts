import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { TestForComponent } from './test/test-for/test-for.component';

const routes: Routes = [
  { path: '', redirectTo: 'createCard', pathMatch: 'full' },
  { path: 'createCard', component: PostFormComponent },
  { path: 'allCards', component: TestForComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
