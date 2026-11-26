/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TesteControler } from './../controller/TesteController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EmpresaController } from './../controller/EmpresaController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ContaContabilController } from './../controller/ContaContabilController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "EmpresaCreateRequest": {
        "dataType": "refObject",
        "properties": {
            "nome": {"dataType":"string","required":true},
            "cnpj": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmpresaResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "nome": {"dataType":"string","required":true},
            "cnpj": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TipoConta": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ATIVO"]},{"dataType":"enum","enums":["PASSIVO"]},{"dataType":"enum","enums":["PATRIMONIO_LIQUIDO"]},{"dataType":"enum","enums":["RECEITA"]},{"dataType":"enum","enums":["DESPESA"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ContaContabilCreateRequest": {
        "dataType": "refObject",
        "properties": {
            "codigo": {"dataType":"string","required":true},
            "nome": {"dataType":"string","required":true},
            "tipo": {"ref":"TipoConta","required":true},
            "empresaId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ContaContabilResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "codigo": {"dataType":"string","required":true},
            "nome": {"dataType":"string","required":true},
            "tipo": {"ref":"TipoConta","required":true},
            "empresaId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsTesteControler_teste: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/teste',
            ...(fetchMiddlewares<RequestHandler>(TesteControler)),
            ...(fetchMiddlewares<RequestHandler>(TesteControler.prototype.teste)),

            async function TesteControler_teste(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTesteControler_teste, request, response });

                const controller = new TesteControler();

              await templateService.apiHandler({
                methodName: 'teste',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmpresaController_criarEmpresa: Record<string, TsoaRoute.ParameterSchema> = {
                data: {"in":"body","name":"data","required":true,"ref":"EmpresaCreateRequest"},
                success: {"in":"res","name":"200","required":true,"ref":"EmpresaResponse"},
                fail: {"in":"res","name":"404","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        };
        app.post('/empresa',
            ...(fetchMiddlewares<RequestHandler>(EmpresaController)),
            ...(fetchMiddlewares<RequestHandler>(EmpresaController.prototype.criarEmpresa)),

            async function EmpresaController_criarEmpresa(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmpresaController_criarEmpresa, request, response });

                const controller = new EmpresaController();

              await templateService.apiHandler({
                methodName: 'criarEmpresa',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmpresaController_buscarEmpresaId: Record<string, TsoaRoute.ParameterSchema> = {
                empresaId: {"in":"path","name":"empresaId","required":true,"dataType":"double"},
                success: {"in":"res","name":"200","required":true,"ref":"EmpresaResponse"},
                fail: {"in":"res","name":"404","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        };
        app.get('/empresa/:empresaId',
            ...(fetchMiddlewares<RequestHandler>(EmpresaController)),
            ...(fetchMiddlewares<RequestHandler>(EmpresaController.prototype.buscarEmpresaId)),

            async function EmpresaController_buscarEmpresaId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmpresaController_buscarEmpresaId, request, response });

                const controller = new EmpresaController();

              await templateService.apiHandler({
                methodName: 'buscarEmpresaId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsContaContabilController_criarConta: Record<string, TsoaRoute.ParameterSchema> = {
                data: {"in":"body","name":"data","required":true,"ref":"ContaContabilCreateRequest"},
                success: {"in":"res","name":"201","required":true,"ref":"ContaContabilResponse"},
                fail: {"in":"res","name":"400","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        };
        app.post('/conta-contabil',
            ...(fetchMiddlewares<RequestHandler>(ContaContabilController)),
            ...(fetchMiddlewares<RequestHandler>(ContaContabilController.prototype.criarConta)),

            async function ContaContabilController_criarConta(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsContaContabilController_criarConta, request, response });

                const controller = new ContaContabilController();

              await templateService.apiHandler({
                methodName: 'criarConta',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsContaContabilController_buscarContaId: Record<string, TsoaRoute.ParameterSchema> = {
                contaId: {"in":"path","name":"contaId","required":true,"dataType":"double"},
                success: {"in":"res","name":"200","required":true,"ref":"ContaContabilResponse"},
                fail: {"in":"res","name":"404","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        };
        app.get('/conta-contabil/:contaId',
            ...(fetchMiddlewares<RequestHandler>(ContaContabilController)),
            ...(fetchMiddlewares<RequestHandler>(ContaContabilController.prototype.buscarContaId)),

            async function ContaContabilController_buscarContaId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsContaContabilController_buscarContaId, request, response });

                const controller = new ContaContabilController();

              await templateService.apiHandler({
                methodName: 'buscarContaId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
