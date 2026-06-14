import { Routes } from '@angular/router';
import { ConverterComponent } from './components/converter/converter';
import { HistoryComponent } from './components/history/history';

export const routes: Routes = [
  { path: '', component: ConverterComponent },
  { path: 'history', component: HistoryComponent }
];
