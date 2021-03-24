import { BrowserModule } from "@angular/platform-browser"
import { NgModule, APP_INITIALIZER } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

import { KeycloakService, KeycloakAngularModule } from "keycloak-angular"
import { DataTablesModule } from "angular-datatables"
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular"
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import * as c3 from "c3"
import * as d3 from "d3"

import { AppRoutingModule } from "./app-routing.module"
import { MaterialModule } from "./material.module"

import { initializer } from "./utils/app-init"
import { StatisticsService } from "./shared/statistics.service"
import { environment } from "../environments/environment"
import { AppComponent } from "./app.component"
import { TopMenuComponent } from "./top-menu/top-menu.component"
import { FooterComponent } from "./footer/footer.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { DocsComponent } from "./docs/docs.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AboutComponent } from "./about/about.component"
import { PrivateComponent } from "./private/private.component"
import { StatisticsComponent } from "./statistics/statistics.component"

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.SCIENTIFIC_SERVICE_URL }),
    cache: new InMemoryCache()
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    DashboardComponent,
    StatisticsComponent,
    AboutComponent,
    PrivateComponent,
    FooterComponent,
    PageNotFoundComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    KeycloakAngularModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    StatisticsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
