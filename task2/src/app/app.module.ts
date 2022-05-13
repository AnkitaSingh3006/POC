import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { RouterModule,Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { ProductComponent } from './product/product.component';
import { QueriesComponent } from './queries/queries.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { UserComponent } from './user/user.component';
  
const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'campaign',component:CampaignComponent},
  {path:'collection',component:CollectionComponent},
  {path:'product',component:ProductComponent},
  {path:'queries',component:QueriesComponent},
  {path:'recovery',component:RecoveryComponent},
  {path:'user',component:UserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
