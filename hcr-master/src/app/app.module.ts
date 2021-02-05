import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NewsService } from './services/news.service';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LatestNewsareaComponent } from './latest-newsarea/latest-newsarea.component';
import { ThumbnailSliderAreaComponent } from './thumbnail-slider-area/thumbnail-slider-area.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BusinessComponent } from './header/Catagories/business/business.component';
import { EntertainmentComponent } from './header/Catagories/entertainment/entertainment.component';
import { GeneralComponent } from './header/Catagories/general/general.component';
import { HealthComponent } from './header/Catagories/health/health.component';
import { SportsComponent } from './header/Catagories/sports/sports.component';
import { ScienceComponent } from './header/Catagories/science/science.component';
import { TechnologyComponent } from './header/Catagories/technology/technology.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



import {NgxPaginationModule} from 'ngx-pagination';
import { SecurityComponent } from './security/security.component';
import { SearchbodyComponent } from './searchbody/searchbody.component';

const routes: Routes = [
  { path: 'contentbody', component: ContentbodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'searchbody', component: SubcontentComponent },
  { path: '', redirectTo: 'contentbody', pathMatch: 'full' },
  {path : 'business', component : BusinessComponent },
  {path : 'entertainment',component : EntertainmentComponent},
  {path : 'general',component : GeneralComponent},
  {path : 'health',component : HealthComponent},
  {path : 'science',component : ScienceComponent},
  {path : 'sports',component : SportsComponent},
  {path : 'technology',component : TechnologyComponent},
  {path : 'forgot-password',component : ForgotPasswordComponent},
  {path : 'reset-password',component : ResetPasswordComponent},
  {path : 'security',component : SecurityComponent},
  {path : 'search',component : SearchbodyComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LatestNewsareaComponent,
    ThumbnailSliderAreaComponent,
    ContentbodyComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    SubcontentComponent,
    FavouritesComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    SportsComponent,
    ScienceComponent,
    TechnologyComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    SecurityComponent,
    SearchbodyComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
