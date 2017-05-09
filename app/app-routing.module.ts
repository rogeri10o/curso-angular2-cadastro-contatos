import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRooutes: Routes = [
    {
        path:'',
        redirectTo: '/contato',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRooutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}