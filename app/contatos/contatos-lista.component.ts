import { Location } from '@angular/common';
import { DialogService } from './../dialog.service';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {
    contatos: Contato[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeOut: any;

    constructor(private contatoService: ContatoService, private dialogService: DialogService) {

    }

    ngOnInit(): void {
       this.contatoService.findAll()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log(err);
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de contatos!'
                });
            });
    }

    teste() {
        console.log('entrou');
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService.delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro!'
                            });
                        })
                }
            })
    }

    private mostrarMensagem(mensagem: {tipo: string, texto: string}): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeOut) {
                clearTimeout(this.currentTimeOut);
            }

            this.currentTimeOut = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        }

        this.classesCss['alert-' + tipo] = true;
    }

}