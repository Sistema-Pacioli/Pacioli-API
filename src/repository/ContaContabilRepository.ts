import { sql } from "../db";
import { ContaContabilCreateRequest } from "../model/dto/ContaContabilCreateRequest";
import { ContaContabil } from "../model/entity/ContaContabil";

export class ContaContabilRepository {
    private static instance: ContaContabilRepository;
    private ready: Promise<void>;

    private constructor() {
        this.ready = this.createTable();
        this.ready.catch(() => {});
    }

    static getInstance(): ContaContabilRepository {
        if (!this.instance) {
            this.instance = new ContaContabilRepository();
        }
        return this.instance;
    }

    private async createTable(): Promise<void> {
        await sql`
            create table if not exists public.conta_contabil (
                id          integer generated always as identity primary key,
                codigo      varchar(20) not null,
                nome        text not null,
                tipo        text not null,
                empresa_id  integer not null references public.empresa(id)
            );
        `;
    }

    async insertConta(data: ContaContabilCreateRequest): Promise<ContaContabil> {
        await this.ready;
        const [conta] = await sql<ContaContabil[]>`
            INSERT INTO public.conta_contabil (codigo, nome, tipo, empresa_id)
            VALUES (${data.codigo}, ${data.nome}, ${data.tipo}, ${data.empresaId})
            RETURNING *
        `;
        return new ContaContabil(conta.id, conta.codigo, conta.nome, conta.tipo, conta.empresaId);
    }

    async findById(contaId: number): Promise<ContaContabil> {
        await this.ready;
        const [conta] = await sql<ContaContabil[]>`
            SELECT * FROM public.conta_contabil WHERE id = ${contaId}
        `;
        if (conta == undefined)
            throw new Error(`Conta contábil do ID ${contaId} não encontrada`);
        return new ContaContabil(conta.id, conta.codigo, conta.nome, conta.tipo, conta.empresaId);
    }
}
