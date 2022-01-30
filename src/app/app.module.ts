import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsertasksComponent } from './usertasks/usertasks.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    UsertasksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,MatSelectModule,FormsModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
