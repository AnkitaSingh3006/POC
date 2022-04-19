import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/***********************Routing***********************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';

/*************************template driven form*****************************/
import { FormsModule } from '@angular/forms';

/******************reactive form module*****************/
import { Conatact2Component } from './conatact2/conatact2.component';
import { ReactiveFormsModule } from '@angular/forms';

/***********************Routing*************************/
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'conatact2',component:Conatact2Component}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactusComponent,
    Conatact2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
