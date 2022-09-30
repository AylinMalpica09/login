import '../assets/styles/personal.css'
function Personal(){
    return(
        <>
        <div className='infPer'>
        <h4> Registrate</h4>
        <label>Nombre (s)</label>
        <input placeholder="Nombre (s)" className="txtBox"></input>
        <br/>
        <label>Apellido Paterno</label>
        <br/>
        <input placeholder="Apellido Paterno" className="txtBox"></input>
        <br/>
        <label>Apellido Materno</label>
        <br/>
        <input placeholder="Apellido Materno" className="txtBox"></input>
        <br/>
        <label>Fecha de nacimiento</label>
        <br/>
        <input type="date" className='dateBox'></input>
        <br/>
        <label>Correo Electronico</label>
        <br/>
        <input placeholder="Correo Electronico" className="txtBox" type="email"></input>
        <br/>
        <label> Telefono</label>
        <br/>
        <input placeholder=" Telefono" className="txtBox" type="number"></input>
        <br/>
        <label> Sexo</label>
        <br/>
        <input type="radio" id="mujer" name="sexo"></input>
        <label for="mujer">Mujer</label><br></br>
        <input type="radio" id="hombre" name="sexo"></input>
        <label for="hombre">Hombre</label><br></br>
        </div>
        </>
    )
}
export default Personal;