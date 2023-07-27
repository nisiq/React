import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        <section className='porte' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {props.colaboradores.map(Colaborador => <Colaborador />)}
        </section>
    )
}

export default Time

//#57c278
//#D9F7E9