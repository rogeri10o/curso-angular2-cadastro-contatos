import { ContatoBuscaComponent } from './contato-busca.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {}