import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GitRepositoryListComponent } from './git-repository-list/git-repository-list.component';
import { ErrorMessageBoxComponent } from './error-message-box/error-message-box.component';

const routes: Routes = [

  {path:'', component: AppComponent},
  {path:'repository', component: GitRepositoryListComponent},
  {path: 'user-not-found', component : ErrorMessageBoxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
