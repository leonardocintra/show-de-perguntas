import { useState } from 'react'
import Botao from '../components/Botao'
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
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao}
        tempoParaResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado} />
      <Botao texto='Proxima questão' href='/resultado' />
    </div>
  )
}
