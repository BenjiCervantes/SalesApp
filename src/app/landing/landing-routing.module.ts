import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'landing',
    component: LayoutPageComponent,
    children: []
  },
  {
    path:'',
    redirectTo: 'landing'
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
