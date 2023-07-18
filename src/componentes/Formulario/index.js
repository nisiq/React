import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const sexo = [
        'Macho',
        'Fêmea'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault() //Prevenir o comportamento padrão, definir controle da situação //Mantem a impressão no console
        console.log('Form foi submetido')
    }



    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do nosso novo aumigo</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do pet" />
                <CampoTexto obrigatorio={true} label="Idade"
                 placeholder="Digite a idade do pet" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Sexo" itens={sexo} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario