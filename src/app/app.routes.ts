import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  { path: 'feeds', component: FeedsComponent }, // Route for feed
  { path: 'auth', component: SignupComponent }, // Route for auth
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect root to auth
  { path: '**', redirectTo: 'auth' } // Wildcard route to catch invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
