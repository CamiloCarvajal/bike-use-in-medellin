import Ages from "./ages"

export default function Home() {
    let name = [{"name": "Kamilo"}]

    return (
        <div>
            <Ages data = {name}/>
            <p>Este grafico muestra el uso de la bicicleta por rango de edades</p>
        </div>

    )
  }