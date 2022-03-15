import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(100, "Qual bicho transmite a Doença de Chagas?", [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro"),
    ]),
    new QuestaoModel(101, 'Qual fruto é conhecido no Norte e Nordetes como "jerimum"?', [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora"),
    ]),
    new QuestaoModel(102, 'Qual time já caiu pra serie B?', [
        RespostaModel.errada("São Paulo"),
        RespostaModel.errada("Chapecoense"),
        RespostaModel.errada("Flamengo"),
        RespostaModel.certa("Palmeiras"),
    ]),
    new QuestaoModel(103, 'Qual é a rais de 121', [
        RespostaModel.errada("8"),
        RespostaModel.errada("9"),
        RespostaModel.errada("10"),
        RespostaModel.certa("11"),
    ]),

]

export default questoes