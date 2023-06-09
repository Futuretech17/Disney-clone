import styled from 'styled-components'
import React from "react";
import Header from './Header'



const Login = (props) => {
    return ( 
      <Container>
       <Header />
        <Content>
          <CTA>
            <CTAlogoOne src='./images/cta-logo-one.png' ></CTAlogoOne>
            <CTAbutton type='button'>GET ALL THERE</CTAbutton>
            <CTAcontent>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
            </CTAcontent>
            <CTAlogoTwo src='./images/cta-logo-two.png' ></CTAlogoTwo>
          </CTA>
          <BgImage />
        </Content>
      </Container>
    )
  }


const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;`

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  padding: 80px 40px;
  box-sizing: border-box;
  margin-bottom: 0px;`
  
const BgImage = styled.div`
  background-image: url(./images/login-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: -1;
  top: 0;
  right: 0; 
  left: 0; 
  position: absolute; 
  height: 100%; 
  `
const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 450px`

const CTAlogoOne = styled.img`
  margin-bottom:12px;
  min-height: 1px;
  display:block;
  width: 100%;`

const CTAcontent = styled.div`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`
const CTAbutton = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
  
  `

const CTAlogoTwo = styled.img`
  width: 100%;
  `

export default Login;