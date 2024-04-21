import { Routes } from '@angular/router';
import { TrzyComponent } from './trzy/trzy.component';
import { DwaComponent } from './dwa/dwa.component';
import { LoremComponent } from './lorem/lorem.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [ 
    { path: 'lorem', component: LoremComponent },
    { path: 'dwa', component: DwaComponent },
    { path: 'trzy', component: TrzyComponent },
    { path: 'form', component: FormComponent }
];

