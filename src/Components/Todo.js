import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    const [state, setState] = useState(false)

    function deletebutton() {
    setState(true);
    }

    function cancelDelete(){
    setState(false);
    }
    
    return(
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deletebutton}>Delete</button>
        </div>
        {state && <Modal onCancel={cancelDelete} onConfirm={cancelDelete} />}
        {state && <Backdrop onPress={cancelDelete} />}
      </div>
    );
}

export default Todo;