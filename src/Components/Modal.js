function Modal(props) {

    function cancelDelete(){
        props.onCancel();
    }

    function ConfirmDelete(){
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you Sure ?</p>
            <button className="btn btn--alt" onClick={cancelDelete}>Cancel</button>
            <button className="btn" onClick={ConfirmDelete}>Yes</button>
        </div>
    );
}

export default Modal;