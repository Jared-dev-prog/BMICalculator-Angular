import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'result/:value',
    component: ResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
