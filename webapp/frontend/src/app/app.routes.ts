import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {HttpClient} from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    component : Home
  },
];
