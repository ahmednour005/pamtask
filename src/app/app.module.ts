import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import { MainService } from './services/main.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {TimeAgoPipe} from 'time-ago-pipe';
import { DescribePipe } from './pipe/describe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TimeAgoPipe,
    DescribePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
