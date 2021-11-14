import React, { useState } from 'react'
import styled from 'styled-components';
import Modals from './components/Modals';
import { GlobalStyle } from './GlobalStyles';


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`


const Button = styled.button`
  min-width: 100px;
  padding:16px 32px;
  border-radius:10px;
  border:none !important;
  background-color:#141414;
  color:#fff;
  font-size:24px;
  cursor:pointer;
`

function App() {

  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a Modal</Button>
        <Modals showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
