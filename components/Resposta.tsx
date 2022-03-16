import styles from '../styles/Resposta.module.css'
import RespostaModel from "../model/resposta"

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {

    const resposta = props.valor

    function renderFrenteCartao() {
        return (
            <div className={styles.frente}>
                <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                    {props.letra}
                </div>
                <div className={styles.valor}>
                    {resposta.valor}
                </div>
            </div>
        )
    }

    function renderVersoCartao() {
        return (
            <div className={styles.verso}>
                {resposta.certa ? (
                    <div className={styles.certa}>
                        <div>A resposta certa é ... </div>
                        <div className={styles.valor}> {resposta.valor} </div>
                    </div>

                ) : (
                    <div className={styles.errada}>
                        <div> A resposta informada esta errada ... </div>
                        <div className={styles.valor}> {resposta.valor} </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={styles.resposta}
            onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudoResposta}>
                {/* {renderFrenteCartao()} */}

                {renderVersoCartao()}
            </div>
        </div>
    )
}