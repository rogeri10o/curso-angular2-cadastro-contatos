import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer
        }
    `]
})
export class ContatoBuscaComponent implements OnInit, OnChanges {
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(private contatoService: ContatoService, private router: Router) { 

    }

    ngOnInit() { 
        this.contatos = this.termosDaBusca
            .debounceTime(500) // espera 500 milisec para realizar uma nova chamada
            .distinctUntilChanged() // evitando busca repetida, caso o termo utilizado seja igual ao anterior
            .switchMap(term => {
                return term ? this.contatoService.search(term): Observable.of<Contato[]>([])
            }).catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(term: string): void {
        this.termosDaBusca.next(term);
        this.buscaChange.emit(term);
    }

    verDetalhe(contato: Contato): void {
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}