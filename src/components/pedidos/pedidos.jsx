import { Link } from "react-router-dom"

const books = [
    {
        id: 1,
        Direccionrecogida: 'Kr 76 # 23 c 12',
        Ciudadrecogida: 'Medellin',
        Nombre: 'Juan Perez',
        Cedula: '1243456656',
        Direccionentrega: 'tv 15 # 20 45',
        Ciudadentrega: 'Bogota',
        Fecha: '2022-12-12'
    },
    {
        id: 2,
        Direccionrecogida: 'cl 15 # 24 56',
        Ciudadrecogida: 'Bogota',
        Nombre: 'Lola Mendez',
        Cedula: '389294932',
        Direccionentrega: 'kr 56 # 45 12',
        Ciudadentrega: 'Cali',
        Fecha: '2022-12-10'
    },
    {
        id: 3,
        Direccionrecogida: 'AV 15 # 56 17',
        Ciudadrecogida: 'Cartagena',
        Nombre: 'Jhon Pinedo',
        Cedula: '674348922',
        Direccionentrega: 'kr 12 # 12 12',
        Ciudadentrega: 'Bogota',
        Fecha: '2022-11-12'
    }]

const labels = [
    "#",
    "Nombre",
    "Cedula",
    "Direccion Origen",
    "Ciudad Origen",
    "Direccion entrega",
    "Ciudad entrega",
    "Fecha",
    "Estado"
]

const Pedidos = () => {
    return (
        <>
            <div>
                <table className="c3">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} className="ajustar">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <th>
                                        <Link to={'/pedidos/' + book.id}>{book.id}</Link>
                                    </th>
                                    <td>{book.Nombre}</td>                                                                                
                                    <td>{book.Cedula}</td>
                                    <td>{book.Direccionrecogida}</td>
                                    <td>{book.Ciudadrecogida}</td>
                                    <td>{book.Direccionentrega}</td>
                                    <td>{book.Ciudadentrega}</td>
                                    <td>{book.Fecha}</td>
                                    <td>
                                        <Link className="boton" to={'/pedidos/' + book.id + '/edit'}>Actualizar</Link>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pedidos