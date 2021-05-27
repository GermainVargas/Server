import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RouterModule } from '@angular/router';
import { AvisoComponent } from './pages/aviso/aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    AvisoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'app-inicio',component:InicioComponent},
      {path: 'app-contacto',component:ContactoComponent},
      {path: 'app-nosotros',component:NosotrosComponent},
      {path: 'app-aviso',component:AvisoComponent},
      {path: '**',redirectTo:'app-aviso'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
