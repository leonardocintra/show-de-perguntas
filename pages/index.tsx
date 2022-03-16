import { useState } from 'react'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMoc = new QuestaoModel(1, 'Melhor Cor ?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vemelho'),
  RespostaModel.errada('Amarelo'),
  RespostaModel.certa('Preto'),
])


export default function Home() {
  const [questao, setQuestao] = useState(questaoMoc)


  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado} />
    </div>
  )
}
