import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
 
`
export const Card = styled.div`
  align-items: center;
  background: white;
  border-radius: 8px;
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  display:flex; 
  flex-direction: column; 
  height: 600px;
  justify-content: center; 
  padding: 18px;
  text-align: center;
  width: min(90vw, 800px);
`

export const Title = styled.h1`
  font-family: Verdana, sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 80px;
  text-transform: uppercase;
  color: #7F25D9;
`

export const Counter = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-around;
  width: 100%; 
`
export const Button = styled.button`
  font-family: Verdana, sans-serif;
  font-size: 40px;
  font-weight: bold;
  height: 60px; 
  width: 60px;
  background: transparent;
 

  cursor: pointer;
  color: #2F0459; 

  display:${(props) => ( props.disabled ? "none" : "block" )};
`


export const Count = styled.div`
  font-family: Verdana, sans-serif;
  font-size: 56px;
  font-weight: bold;
`

export const Modal = styled.div `
  align-items: center;
  background: #eee;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  padding: 40px;
  position: absolute;
  width: 600px;

  button{
    border: none;
    cursor: pointer;
    font-size: 24px; 
    padding: 16px;
    position: absolute;
    right: 0;
    top:0;

  }

  img{

  }

  p{
    font-family: Verdana, sans-serif;
    font-size: 25px;
    margin-bottom: 20px;
  }
`