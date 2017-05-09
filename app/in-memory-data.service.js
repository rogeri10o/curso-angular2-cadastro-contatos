"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@mail.com', telefone: '(00) 00000-0000' },
            { id: 2, nome: 'Rogério Reis', email: 'rogerio@mail.com', telefone: '(85) 00000-0000' },
            { id: 3, nome: 'Rildo Reis', email: 'rildo@mail.com', telefone: '(86) 00000-0000' },
            { id: 4, nome: 'Seu Madruga', email: 'madruga@mail.com', telefone: '(00) 11111-0000' },
        ];
        let carros = [
            { id: 1, descricao: 'camaro' },
            { id: 2, descricao: 'mustang' }
        ];
        return {
            'contatos': contatos,
            'carros': carros
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map