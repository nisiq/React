import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const sexo = [
        'Macho',
        'Fêmea'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do nosso novo aumigo</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do pet" />
                <CampoTexto label="Idade"
                 placeholder="Digite a idade do pet" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Sexo" itens={sexo} />
            </form>
        </section>
    )

}

export default Formulario