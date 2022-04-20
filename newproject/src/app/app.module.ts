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

/**********************sharing data between component******************/
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { SiblingComponent } from './sibling/sibling.component';

/***********************Routing*************************/
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'conatact2',component:Conatact2Component},
  {path:'parent',component:ParentComponent},
  {path:'parent2',component:Parent2Component},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactusComponent,
    Conatact2Component,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    SiblingComponent,

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
