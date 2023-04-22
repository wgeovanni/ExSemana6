import "./Card.css"

const Card = (usuario) => {
    return (
        <div className="apresentacao">
            <img className="foto" src={usuario.foto} alt="Foto de Willyan" />
            <div className="dados">
                <p className="nome">{usuario.nome}</p>
                <p>{usuario.idade}</p>
                <div className="links">
                    <a href={usuario.github}><i className="bi-github" ></i></a>
                    <a href={usuario.linkedin}><i className="bi-linkedin" ></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card;