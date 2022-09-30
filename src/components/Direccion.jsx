import '../assets/styles/direccion.css'
function Direccion(){
    return(
        <>
        <div className='andress'>
        <h4> Direccion </h4>
        <label>Calle</label>
        <input placeholder="Calle" className="txtBox"></input>
        <br/>
        <label>Numero/Manzana/Lote</label>
        <input placeholder="#" className="txtBox" type="number"></input>
        <br/>
        <label>Colonia</label>
        <input placeholder="Colonia" className="txtBox"></input>
        <br/>
        <label>Entre Calles</label>
        <input placeholder="Calle" className="txtBox"></input>
        <br/>
        <label> CP</label>
        <input placeholder=" CP" className="txtBox" type="number"></input>
        
        </div>
        </>
    )

}
export default Direccion;