import React, { useState } from "react"
import { Addtodo, Removetodo } from "../Action/index"
import { useSelector, useDispatch } from "react-redux"

function Todolist() {
    const [input, setINput] = useState("")
    const list = useSelector((store) => store.Todo.list)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="subcontainer">
                    <h1>Todolist</h1>

                    <div className="sub">
                        <input type="text" value={input} onChange={(e) => setINput(e.target.value)} />
                    </div>
                    <div className="sub">
                        <button type="button" className="submit" onClick={() => dispatch(Addtodo(input), setINput(""))}>submit</button>
                    </div>
                    <ul>
                        {list.map((value, id) => {
                            return <li key={value.id}>{value.data} <span><button className="del" onClick={() => dispatch(Removetodo(id))}>X</button></span></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todolist



// import { connect } from "react-redux"
// import Home from "../components/Home";
// import { addtocart } from "../Service/Action/Action.js";

// const mapStateToProp = state => ({
//     data: state.cardItem
// })
// const mapDispatchToProp = dispatch => ({
//     addTocartHandler: data => dispatch(addtocart(data))
// })

// export default connect(mapStateToProp, mapDispatchToProp)(Home)