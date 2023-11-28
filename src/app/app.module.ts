import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitRepositoryListComponent } from './git-repository-list/git-repository-list.component';
import { ErrorMessageBoxComponent } from './error-message-box/error-message-box.component';
import { SelektonEffectComponent } from './selekton-effect/selekton-effect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    GitRepositoryListComponent,
    ErrorMessageBoxComponent,
    SelektonEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
