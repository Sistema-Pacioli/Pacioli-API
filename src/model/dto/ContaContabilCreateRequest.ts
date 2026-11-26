import { TipoConta } from "../entity/ContaContabil";

export class ContaContabilCreateRequest {
    codigo: string;
    nome: string;
    tipo: TipoConta;
    empresaId: number;

    constructor(
        codigo: string,
        nome: string,
        tipo: TipoConta,
        empresaId: number
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
        this.empresaId = empresaId;
    }
}
