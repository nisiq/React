import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do nosso novo aumigo</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do pet" />
                <CampoTexto label="Idade" placeholder="Digite a idade do pet" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )

}

export default Formulario