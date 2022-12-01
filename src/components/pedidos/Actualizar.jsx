import Formulario from "./Formulario"
import { useParams } from "react-router-dom"

const bookData = {
    id: 1,
    title: 'Be loved',
    author: 'Toni Morrison',
    year: '1987',
    readAt: '2022-10-07'
}

const Actualizar = () => {
    const { id } = useParams()

    return (
        <>
            <Formulario data={bookData} />
        </>
    )
}

export default Actualizar