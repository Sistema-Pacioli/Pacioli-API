export type TipoConta = "ATIVO" | "PASSIVO" | "PATRIMONIO_LIQUIDO" | "RECEITA" | "DESPESA";

export class ContaContabil {
    id: number;
    codigo: string;
    nome: string;
    tipo: TipoConta;
    empresaId: number;

    constructor(
        id: number,
        codigo: string,
        nome: string,
        tipo: TipoConta,
        empresaId: number
    ) {
        this.id = id;
        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
        this.empresaId = empresaId;
    }
}
