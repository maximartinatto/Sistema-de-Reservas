import './form.css'

function Form(props){
    function saveReservation(){
        const fecha = document.querySelector('#fecha').value;
        const lugar = document.querySelector('#lugar').value;
        props.parentCallback(
            { Fecha: fecha, Lugar: lugar}
        )

    }
    return(
        <div className='card m-5'>
            <div className='mb-3'>
                <label htmlFor='fecha'className='form-label'>Fecha de reserva</label>
                <input type='date'className='form-control'id='fecha'/>

            </div>
            <div className='mb-3'>
                <label htmlFor='lugar'className='form-label'>Lugar de reserva</label>
                <select id='lugar'className='form-select'>
                    <option value='Hotel'>Hotel</option>
                    <option value='Spa'>Spa</option>
                    <option value='Restaurante'>Restaurante</option>
                </select>
            </div>
            <div className='mb-3'>
                <button className='btn btn-light' onClick={()=>saveReservation()}>Reservar</button>
            </div>
        </div>
    )
}
export default Form;