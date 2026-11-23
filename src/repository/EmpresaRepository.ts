import { sql } from "../db";
import { Empresa } from "../model/entity/Empresa";

export class EmpresaRepository {
    private static instance: EmpresaRepository;
    private ready: Promise<void>;

    private constructor() {
        this.ready = this.createTable();
        this.ready.catch(() => {});
    }

    static getInstance(): EmpresaRepository {
        if(!this.instance) {
            this.instance = new EmpresaRepository();
        }
        return this.instance;
    }

    private async createTable(): Promise<void> {
        await sql`
            create table if not exists public.empresa (
                id   integer generated always as identity primary key,
                nome text not null,
                cnpj varchar(14) not null unique
            );
        `

        await sql`
            alter table empresa enable row level security;
        `
    }

    async findById(empresaId: number): Promise<Empresa> {
        await this.ready;
        const [empresa] = await sql<Empresa[]>`
            select * from public.empresa where id = ${empresaId};
        `;
        if(empresa == undefined)
            throw new Error(`Empresa do ID ${empresaId} nao encontrada`);
        return new Empresa(empresa?.id, empresa?.nome, empresa?.cnpj)
    }
}