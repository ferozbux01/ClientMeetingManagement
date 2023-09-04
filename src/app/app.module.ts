import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MeetingsComponent } from './meetings/meetings.component';
import { AddComponent } from './add/add.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    AddComponent,
    MenuComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
