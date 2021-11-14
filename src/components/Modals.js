import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,.2);
    background: #fff;
    color: #000;
    display:grid;
    grid-template-columns:1fr 1fr;
    z-index: 10;
    border-radius:10px;
    position: relative;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius:10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height:1.8;
    color: #141414;

    p{
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`
const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:1rem;
    right:1rem;
    width: 30px;
    height:30px;
    z-index:10;
`

const Modals = ({ showModal, setShowModal }) => {

    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    })

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])
    
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg src="https://images.unsplash.com/photo-1613632366011-22c94dc3fa5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=402&q=80" alt="camera" />
                            <ModalContent>
                                <h1>Are you Ready ?</h1>
                                <p>Get Exclusive access to our next launch</p>
                                <button>Join Now</button>
                            </ModalContent>
                            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default Modals
