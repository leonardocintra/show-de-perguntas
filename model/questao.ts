import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true
        }

        return false
    }

    get naoRespondida() {
        return !this.respondida
    }

    responderCom(indice: number): QuestaoModel {
        // o "?" depois de indice serve para pegar o valor somente se o indice for valido
        // o usuario pode colocar um indice invalido, entao a resposta sera false
        const acertou = this.#respostas[indice]?.certa

        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModel {
        let respostaEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostaEmbaralhadas, this.#acertou)
    }

    static criarUsandoObjeteo(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(r => RespostaModel.criarUsandoObjeto(r))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    converterParaObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.converterParaObjeto()),
        }
    }
}