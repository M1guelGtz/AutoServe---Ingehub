
function Input( props ) {
  const handlerOnChange =(event=>{
        // if(props.type == "file"){
        //     props.fnVal(event.target.files[0])
        // }else{
        //     
        props.fnVal(event.target.value)
        // }
    })
    
    return (
        <div className="border border-white flex flex-col">
            <input id={props.label} ref={props.ref} onBlur={props.onBlur} className="border border-red-700" type={props.type} onChange={handlerOnChange}></input>
            <label className="translate-[-25px]" htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default Input