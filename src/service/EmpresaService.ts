import { EmpresaCreateRequest } from "../model/dto/EmpresaCreateRequest";
import { EmpresaResponse } from "../model/dto/EmpresaResponse";
import { Empresa } from "../model/entity/Empresa";
import { EmpresaRepository } from "../repository/EmpresaRepository";

export class EmrpesaService {
    private empresaRepository = EmpresaRepository.getInstance();

    async criarEmpresa(data: EmpresaCreateRequest): Promise<EmpresaResponse> {
        if(!data.cnpj || !data.nome)
            throw new Error("Dados insuficientes para criar empresa (CNPJ e nome)");
        return await this.empresaRepository.insertEmpresa(data);
    }

    async buscarEmpresaId(empresaId: number): Promise<EmpresaResponse> {
        if(!empresaId)
            throw new Error("Valor invalido: inserir id valido da empresa");
        const empresa = await this.empresaRepository.findById(empresaId)
        return new EmpresaResponse(empresa.id, empresa.nome, empresa.cnpj);
    }
}