import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { ManageEventsComponent } from './manage-events/manage-events.component'
import { DocsComponent } from './docs/docs.component'
import { PrivateComponent } from './private/private.component'
import { AppAuthGuard } from './app.authguard'

/**
 * ToolComponent and ScientificComponent have their own specific routing module.
 */
export const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent, },
  { path: 'tool', loadChildren: () => import('./tool/tool.module').then(m => m.ToolModule), },
  { path: 'scientific', loadChildren: () => import('./scientific/scientific.module').then(m => m.ScientificModule) },
  { path: 'stats', component: StatisticsComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'docs', component: DocsComponent, },
  { path: 'private', component: PrivateComponent, canActivate: [AppAuthGuard],
    children: [
      {path: 'private/manage-events', component: ManageEventsComponent}
    ] 
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  providers: [AppAuthGuard],
})
export class AppRoutingModule { }
