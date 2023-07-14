import './Banner.css'

export const Banner = () => {
    // ISSO É JSX - COMO O REACT TRABALHA COM A PARTE VISUAL... PARECE HTML MAS NÃO É, ENTENDE O QUE ACONTECE AQUI E TRANSFORMA 
    return (
        //CLASSNAME É A MESMA COISA QUE CLASS NO CSS
        <header className="banner">
            <img src="/imagens/capa_dog.jpg" alt="O banner principal da página"/>
        </header>
        
    )
}
