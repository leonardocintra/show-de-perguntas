import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMoc = new QuestaoModel(1, 'Melhor Cor ?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vemelho'),
  RespostaModel.errada('Amarelo'),
  RespostaModel.certa('Preto'),
])


const BASE_URL = 'http://localhost:3000/api'


export default function Home() {
  const [idsDasQuestoes, setIdDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMoc)

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    console.log(json)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irParaProximoPasso() {

  }

  return (
    <Questionario
      questao={questao}
      ultima={false}
      questaoRespondida={questaoRespondida}
      irParaProximoPasso={irParaProximoPasso}
    />
  )
}
