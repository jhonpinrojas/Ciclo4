import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import Contenedor from "../contenedor";


const Formulario = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const customSubmit = (dataForm) => {
        if (isEdit) {
            console.log('Here goes the edit logic')
        } else {
            console.log('Here goes create logic')
        }
        console.log('dataForm', dataForm)
    }

    useEffect(() => {
        if (data.length !== 0) {
            setIsEdit(true)
            setValue('Direccionrecogida', data.Direccionrecogida)
            setValue('Ciudadrecogida', data.Ciudadrecogida)
            setValue('Nombre', data.Nombre)
            setValue('Cedula', data.Cedula)
            setValue('Direccionentrega', data.Direccionentrega)
            setValue('Ciudadentrega', data.Ciudadentrega)
            setValue('Fecha', data.Fecha)

        }
    })

    return (
        <>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <table className="c1">
                      <tr>
                      <td><Contenedor/></td><td><h4>{isEdit ? "Actualizar" : "Crear"}</h4></td>
                      </tr>
                      <tr>                                                                                  
                      <label> </label>
                      </tr>  
                      <tr>      
                            <td>
                                
                                <label>Estado</label><input className="estado" type="text"{...register("readAt", { required: true })}
                                 aria-invalid={errors.Estado ? "true" : "false"}/>
                                 {errors.Estado && <p>Field required</p>}
                                 </td>                                
                                 <td>
                                 
                                <label>Fecha</label><input type="date"
                                 {...register("Fecha", { required: true })}
                                 aria-invalid={errors.Fecha ? "true" : "false"}/>
                                 {errors.Fecha && <p>Field required</p>}
                                 </td>
                            </tr> 
                        <tr>
                            <td>
                                <div>
                                <label>Largo</label><input type="number" className="box" {...register("Largo", { required: true, maxLength: 10 })} 
                                   aria-invalid={errors.Largo ? "true" : "false"}/>
                                   {errors.Largo && <p>Field required</p>}
                                <label>Ancho </label><input type="number" className="box" {...register("Ancho", { required: true, maxLength: 10 })}
                                   aria-invalid={errors.Ancho ? "true" : "false"}/>
                                   {errors.Ancho && <p>Field required</p>}
                                </div>
                            </td> 
                            <td>
                                <div>
                                <label>Alto </label><input type="number" className="box" {...register("Alto", { required: true, maxLength: 10 })} 
                                   aria-invalid={errors.Alto ? "true" : "false"}/>
                                   {errors.Alto && <p>Field required</p>}
                                <label>Peso </label> <input type="number" className="box" {...register("Peso", { required: true, maxLength: 10 })}
                                   aria-invalid={errors.Peso ? "true" : "false"}/>
                                   {errors.Peso && <p>Field required</p>}     
                                 </div>                          
                            </td>
                        </tr>  
                <tr>
                <td><label>Direccion Origen</label></td><td>
                <input
                    {...register("Direccionrecogida", { required: true, maxLength: 10 })}
                    aria-invalid={errors.Direccionrecogida ? "true" : "false"}
                />
                {errors.Direccionrecogida && <p>Field required.</p>} </td>
                </tr>
                <tr>
                <td><label>Ciudad de Origen</label></td><td>                                             
                <input
                    {...register("Ciudadrecogida", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Ciudadrecogida ? "true" : "false"}
                />
                {errors.Nombre && <p>Field required. ABC required</p>} </td>   
                </tr>
                <tr>
                <td><label>Nombre destinatario</label></td><td>
                <input
                    type="text"
                    {...register("Nombre", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Nombre ? "true" : "false"}
                     />
                {errors.Nombre && <p>Field required. ABC required</p>}</td>   
                </tr>
                <tr>
                <td><label>Cedula nit destinatario</label></td><td>                                              
                <input
                    type="number"
                    {...register("Cedula", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Cedula ? "true" : "false"}
                />
                {errors.Cedula && <p>Field required. ABC required</p>}</td>
                </tr>
                <tr>
                <td><label>Direccion Destino</label></td><td>                                               
                <input
                    {...register("Direccionentrega", { required: true})}
                    aria-invalid={errors.Direccionentrega ? "true" : "false"}
                />
                {errors.Direccionentrega && <p>Field required</p>}</td>
                </tr>
                <tr>
                <td><label>Ciudad Destino</label></td><td>            
                <input
                    {...register("Ciudadentrega", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.Ciudadentrega ? "true" : "false"}
                />
                {errors.Ciudadentrega && <p>Field required. ABC required</p>}</td>
                </tr>
                <tr>
                <label> </label>
                </tr>
                <tr>
                <label> </label>
                </tr>
            </table>
                <input className="boton" type="submit" value={isEdit ? "Actualizar" : "Crear"} />
            </form>
        </>
    )
}

export default Formulario