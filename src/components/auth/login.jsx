import { useForm } from "react-hook-form";
import Contenedor from "../contenedor";
import App from "../../App";
import { Link,BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./register";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
    <div className="App">
       <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <table className="c2">
                <tr>
                <td><Contenedor/></td><td><h4>Ingreso</h4></td>
                </tr>
                <tr>
                <label> </label>
                </tr>
                <tr>
                <td><label>Usuario</label></td><td>
                <input
                    {...register("Usuario", { required: true, maxLength: 10 })}
                    aria-invalid={errors.Usuario ? "true" : "false"}
                />
                {errors.Usuario && <p>Field required. Max length 10</p>} </td>
                </tr>
                <tr>
                <td><label>Contraseña</label></td><td>
                <input
                    type="pass"
                    {...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.password ? "true" : "false"}
                     />
                {errors.password && <p>Field required. ABC required</p>}</td>   
                </tr>
                <tr>
                <label> </label>
                </tr>
            </table>
            <Link className="boton" to={'/registro'}>Ingresar</Link>
        </form>
        </div>                                                  
    )
}

export default Login