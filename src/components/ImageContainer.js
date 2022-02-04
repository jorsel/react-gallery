import React,{useState} from 'react';
import ContainerStyle from '../styles/ImageContainer.css'
import ModalWindow from './ModalWindow'

function ImageContainer(props){

    const[isOpen, setOpenState] = useState(false);

    return (
        
        <span className='root-container'>
            <ModalWindow open={isOpen} onClose={() => setOpenState(false)}>
                <img src={props.url} alt="" onClick={() => setOpenState(false)} style={{maxWidth:"90vw", maxHeight:"90vh"}}/>
            </ModalWindow>
            <img className='img-container' src={props.url} alt="" onClick={() => {setOpenState(true)}}/>
            <p className='title'>{props.title}</p>
            <p className='creditText'>Fotograf: {props.photographer}</p>
        </span>
    )

}
export default ImageContainer;

//todo
/*
Add a way to supply images when creating container component
 */