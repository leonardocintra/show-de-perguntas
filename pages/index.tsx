import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor Cor', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vemelho'),
    RespostaModel.errada('Amarelo'),
    RespostaModel.certa('Preto'),
  ])
  
  return (
    <Questao valor={questaoTeste} />
  )
}
