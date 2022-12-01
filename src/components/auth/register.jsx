import { useForm } from "react-hook-form";
import Contenedor from "../contenedor";


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        
       <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <table className="c2">
                <tr>
                <td><Contenedor/></td><td><h4>Registro</h4></td>
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
                <td><label>Nombre</label></td><td>                                             
                <input
                    {...register("Nombre", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Nombre ? "true" : "false"}
                />
                {errors.Nombre && <p>Field required. ABC required</p>} </td>   
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
                <td><label>Direccion</label></td><td>                                              
                <input
                    {...register("Direccion", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Direccion ? "true" : "false"}
                />
                {errors.Direccion && <p>Field required. ABC required</p>}</td>
                </tr>
                <tr>
                <td><label>Cedula</label></td><td>                                               
                <input
                    type="number"
                    {...register("Cedula", { required: true})}
                    aria-invalid={errors.Cedula ? "true" : "false"}
                />
                {errors.Cedula && <p>Field required</p>}</td>
                </tr>
                <tr>
                <td><label>Correo</label></td><td>            
                <input
                    {...register("Correo", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Correo ? "true" : "false"}
                />
                {errors.Correo && <p>Field required. ABC required</p>}</td>
                </tr>
                <tr>
                <td><label>Telefono</label></td><td>                                               
                <input
                    type="number"
                    {...register("Telefono", { required: true})}
                    aria-invalid={errors.Telefono ? "true" : "false"}
                />
                {errors.Telefono && <p>Field required</p>}</td>
                </tr>
                <tr>
                <label> </label>
                </tr>
            </table>
            <input className="boton" type="submit" value="Registrar" />
        </form>
       
    )
}

export default Register