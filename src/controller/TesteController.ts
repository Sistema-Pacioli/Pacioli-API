import { Get, Response, Route, Tags } from "tsoa";

@Route("teste")
@Tags("Teste")

export class TesteControler {
    @Get("/")
    public async teste(){
        return "Deu Certo!"
    }
}