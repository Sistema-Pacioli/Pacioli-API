import { Body, Get, Path, Post, Res, Response, Route, Tags, TsoaResponse } from "tsoa";
import { EmpresaService } from "../service/EmpresaService";
import { EmpresaResponse } from "../model/dto/EmpresaResponse";
import { EmpresaCreateRequest } from "../model/dto/EmpresaCreateRequest";

@Route("empresa")
@Tags("Empresa")

export class EmpresaController {
    private empresaService = new EmpresaService();

    @Post("/")
    async criarEmpresa(
        @Body() data: EmpresaCreateRequest,
        @Res() success: TsoaResponse<200, EmpresaResponse>,
        @Res() fail: TsoaResponse<404, { message: string }>
    ) {
        try {
            const empresa = await this.empresaService.criarEmpresa(data);
            return success(200, empresa);
        } catch (error: any) {
            return fail(404, { message: `Erro criar empresa: ${error.message}` });
        }
    }

    @Get("/{empresaId}")
    async buscarEmpresaId(
        @Path("empresaId") empresaId: number,
        @Res() success: TsoaResponse<200, EmpresaResponse>,
        @Res() fail: TsoaResponse<404, { message: string }>
    ) {
        try {
            const empresa = await this.empresaService.buscarEmpresaId(empresaId);
            return success(200, empresa);
        } catch (error: any) {
            return fail(404, { message: `Erro ao procurar empresa: ${error.message}` });
        }
    }
}