import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { PoliticasDeNavegacionComponent } from './pages/politicas-de-navegacion/politicas-de-navegacion.component';
import { AvisoDePrivacidadComponent } from './pages/politicas-de-navegacion/aviso-de-privacidad/aviso-de-privacidad.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { ProductosYServiciosComponent } from './pages/productos-y-servicios/productos-y-servicios.component';
import { CafeComponent } from './pages/productos-y-servicios/cafe/cafe.component';
import { InsumosComponent } from './pages/productos-y-servicios/insumos/insumos.component';
import { AccesoriosComponent } from './pages/productos-y-servicios/accesorios/accesorios.component';
import { MaquinasComponent } from './pages/productos-y-servicios/maquinas/maquinas.component';
import { ArteLatteComponent } from './pages/capacitacion/arte-latte/arte-latte.component';
import { DataService } from './utils/data.service';
import { FormacionEmprendedoresComponent } from './pages/capacitacion/formacion-emprendedores/formacion-emprendedores.component';
import { CafeVerdeComponent } from './pages/capacitacion/cafe-verde/cafe-verde.component';
import { ColdBrewComponent } from './pages/capacitacion/cold-brew/cold-brew.component';
import { ExperienciaSensorialComponent } from './pages/capacitacion/experiencia-sensorial/experiencia-sensorial.component';
import { MixologiaMocteleriaComponent } from './pages/capacitacion/mixologia-mocteleria/mixologia-mocteleria.component';
import { TostadoComponent } from './pages/capacitacion/tostado/tostado.component';
import { FormacionParaBaristasComponent } from './pages/capacitacion/formacion-para-baristas/formacion-para-baristas.component';
import { CatacionComponent } from './pages/capacitacion/catacion/catacion.component';
import { BubleTeaIcedCoffeeComponent } from './pages/capacitacion/bubble-tea-iced-coffee/bubble-tea-iced-coffee.component';
import { BrewBarComponent } from './pages/capacitacion/brew-bar/brew-bar.component';
import { DondeEncontrarnosComponent } from './pages/donde-encontrarnos/donde-encontrarnos.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    QuienesSomosComponent,
    PoliticasDeNavegacionComponent,
    AvisoDePrivacidadComponent,
    CapacitacionComponent,
    ProductosYServiciosComponent,
    CafeComponent,
    InsumosComponent,
    AccesoriosComponent,
    MaquinasComponent,
    ArteLatteComponent,
    FormacionEmprendedoresComponent,
    CafeVerdeComponent,
    ColdBrewComponent,
    ExperienciaSensorialComponent,
    MixologiaMocteleriaComponent,
    TostadoComponent,
    FormacionParaBaristasComponent,
    CatacionComponent,
    BubleTeaIcedCoffeeComponent,
    BrewBarComponent,
    DondeEncontrarnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
