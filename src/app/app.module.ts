import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { AppComponent } from "./app.component";
import { HomeModuleComponent } from "./home/home-module/home-module.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { registerLocaleData } from "@angular/common";
import { ControlEntriesService } from "./services/control-entries.service";

import { NgApexchartsModule } from "ng-apexcharts";

registerLocaleData(localePt);
@NgModule({
  declarations: [AppComponent, HomeModuleComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule,
  ],
  // imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, ControlEntriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
