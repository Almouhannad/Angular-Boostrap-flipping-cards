import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/root/app.component';

import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  // creators of services that this module contributes to the
  // global collection of services; they become accessible in
  // all parts of the app
  providers: [],

  // components and directives that belong to this module
  // the subset of declarations that should be visible and usable in
  // the component templates of other modules
  declarations: [
    AppComponent,
    CardComponent,
    CollectionComponent
  ],
  exports: [
    AppComponent
  ],

  // identifies the root component that Angular should
  // bootstrap when it starts the application
  bootstrap: [AppComponent]


})
export class AppModule { }
