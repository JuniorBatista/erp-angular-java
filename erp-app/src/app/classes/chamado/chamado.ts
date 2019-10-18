import { Usuario } from '../usuario/usuario';

export class Chamado {
    id: number;
    titulo: string;
    descricao: string;
    atribuido: Usuario;
    solicitante: Usuario;
    dataCadastro: Date;
    dataAtualizacao: Date;
}
