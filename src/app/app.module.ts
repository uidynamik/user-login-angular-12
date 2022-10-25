import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginCardComponent } from './login-card/login-card.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardFormComponent } from './card-form/card-form.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    LoginCardComponent,
    CardFooterComponent,
    CardFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
