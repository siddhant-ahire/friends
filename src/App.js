import ScratchCard from 'react-scratch-coupon'
import { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import {
  Button,
  Col,
  Container,
  Content,
  Footer,
  Grid,
  Header,
  Input,
  InputGroup,
  Modal,
  Row,
} from 'rsuite'
import Confetti from 'react-confetti'
import Scratch from './scratch.jpg'
import shiba from './shiba.png'
import banner from './banner.jpg'
import './App.css'

function App() {
  const [run, setRun] = useState(false)
  const { width, height } = useWindowSize()
  const [authenticated, setAuthenticated] = useState(false)

  const setVisibleF = (e) => {
    if (e == 'abc') {
      setAuthenticated(true)
      return
    }
  }

  setTimeout(() => {
    setRun(true)
  }, 3000)

  return (
    <div className="App" style={{ marginTop: 10, marginTop: 100 }}>
      {!authenticated ? (
        <Grid
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            textAlign: 'center',
          }}
        >
          <Row>
            <img className="img" src={banner} style={{ opacity: 0.8 }} />
          </Row>
          <br />
          <Row id="container">
            <InputGroup
              inside
              style={{ marginBottom: 10, textAlign: 'center' }}
            >
              <Input
                style={{ height: 30 }}
                placeholder="Enter Password"
                type={'password'}
                onChange={setVisibleF}
              />
              <br></br>
              <span> Password: abc</span>
            </InputGroup>
          </Row>
        </Grid>
      ) : (
        <>
          <Confetti width={width} height={height} run={run} />
          <ScratchCard width={300} height={300} cover={Scratch}>
            <div style={{ textAlign: 'center' }}>
              <img src={shiba} height={70} width={70} />
              <h2>Happy Wedding!</h2>
              <h3>Wishing you a lifetime of love and hapiness.</h3>
              <p style={{ margin: 0, padding: 0, fontSize: 14 }}>
                You have recieved{' '}
                <span style={{ color: 'red' }}> 1,63,9779 </span>SHIB COINS
              </p>
              <h6 style={{ margin: 0, padding: 5, fontSize: 10 }}>
                Install : Trust: Crypto & Bitcoin Walletp
              </h6>
              <h6 style={{ margin: 0, padding: 0, fontSize: 11 }}>
                Login with Password : ********************
              </h6>
            </div>
          </ScratchCard>
        </>
      )}
    </div>
  )
}

export default App
