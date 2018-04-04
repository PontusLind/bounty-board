import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './shared/list.component'
import { ProfileDetailsComponent } from './shared/profile-details.component'
import { ProfileViewComponent} from './shared/profile-view.component'
import { NavButtonComponent} from './shared/nav-button.component'

import { DataManagerService } from './shared/data-manager.service'
import { SearchPipe }from './shared/search.pipe';

const appRoutes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', redirectTo: '/board', pathMatch: 'full'},
  { path: '**', component: ListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ProfileComponent,
    ListComponent,
    ProfileDetailsComponent,
    ProfileViewComponent,
    NavButtonComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
