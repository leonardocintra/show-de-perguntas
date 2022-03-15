import questoes from "../bancoDeQuestoes"

export default function handler(req, res) {

  const idSelecionado = +req.query.id
  const unicaQuestaoSelecionada = questoes.filter(questao => questao.id === idSelecionado)

  if (unicaQuestaoSelecionada.length === 1) {
    const questaoSelecionada = unicaQuestaoSelecionada[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.converterParaObjeto())
  } else {
    res.status(204).send()
  }
}
