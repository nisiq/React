import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const sexos = [
        'Macho',
        'Fêmea'
    ]


    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [sexo, setSexo] = useState('')
    const [porte, setPorte] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault() //Prevenir o comportamento padrão, definir controle da situação //Mantem a impressão no console
        props.aoColaboradorCadastrado({
            nome,
            idade,
            imagem,
            sexo,
            porte
        })
        
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card do nosso novo aumigo</h2>
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do pet" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto
                    obrigatorio={true} 
                    label="Idade"
                    placeholder="Digite a idade do pet"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />

                <CampoTexto 
                    obrigatorio={true}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Sexo"
                    itens={sexos}
                    valor = {sexo}
                    aoAlterado={valor => setSexo(valor)} 
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Porte" 
                    itens={props.nomeDosPortes}
                    valor = {porte}
                    aoAlterado={valor => setPorte(valor)} 
                />

                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )

}

export default Formulario