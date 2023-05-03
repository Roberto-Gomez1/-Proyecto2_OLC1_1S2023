import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AstComponent } from './components/ast/ast.component';
import { FormsModule } from '@angular/forms';
import { ErroresComponent } from './components/errores/errores.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AstComponent,
    ErroresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
