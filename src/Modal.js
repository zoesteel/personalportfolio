import React from 'react';

const Modal = ({ handleClose, open, name, children }) => {
const showHideClassName = open ? "modal display-block" : "modal display-none";

return (
        <div className={showHideClassName}>
            <div className="modal-content">
                {name}
                {children}
                <span className="close" onClick={handleClose}>&times;</span>                
            </div>
        </div> 
    );
}  
//class Modal extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         open: false
    //     }

    // }

//     render(){
//         return(
            
//             <div id="myModal" className="modal">

//                 {/* Modal content */}
//                 {/* {this.state.open ? ( */}
//                 <div className="modal-content">
//                     <span className="close" onClick={this.closeModal}>&times;</span>
//                     <p>Some text in the Modal..</p>
//                 </div>
//                 {/* )} */}
//             </div>            
//         )
//     }

export default Modal;