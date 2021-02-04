import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 20px;
 
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
  padding: 15px;
  text-align: center;
  width: min(90vw, 800px);

  animation: motionY 0.5s linear;

  .challenge{
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-style:italic;
    font-size: 26px;
    margin-bottom: 60px;
  }

  .logo{
    margin-bottom: 60px;
    margin-top: -60px;
  }


  @keyframes motionY {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}
`

export const Title = styled.h1`
  font-family: 'Paytone One', sans-serif;;
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #1e74bf;

  @media(max-width: 430px) {
    font-size: 40px;
  }
  
`

export const Counter = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-around;
  width: 100%; 

  .square{
    width: 60px;
  }
`
export const Button = styled.button`
  background: #0071B1;
  margin: none;
  color: white; 
  cursor: pointer;
  font-family: Verdana, sans-serif;
  font-size: 40px;
  font-weight: bold;
  height: 60px; 
  width: 60px;

  border-width: 0px;
  border-style: none;
  border-color: none;

  :focus{
    outline-style: none;
  }

// Quando a prop conter a palavra 'disabled', será 'none', senão será 'block'
  
  display:${(props) => ( props.off ? "none" : "block" )};
  opacity:${(props) => (props.none ? "0.5" : "1")};
  cursor:${(props) => (props.none ? "not-allowed" : "pointer")};

  @media(max-width: 430px) {
    height: 50px; 
    width: 50px;
    font-size: 30px;
    }

`


export const Count = styled.div`
  font-family: Verdana, sans-serif;
  font-size: 56px;
  font-weight: bold;

  @media(max-width: 430px) {
   font-size: 40px;
  }
`

export const Modal = styled.div `
  align-items: center;
  background: #eee;

  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  padding: 0px 40px;
  position: absolute;
  width: 600px;
  box-shadow: 9px 9px 5px 0px rgba(20, 20, 20, 0.30);

  animation: motion-opacity 0.3s ease;

  @keyframes motion-opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

  button{
    border: none;
    color: #999999;
    cursor: pointer;
    font-size: 24px; 
    padding: 14px;
    position: absolute;
    right: 0;
    top:0;
  }

  img{
    width: 100%;
    max-height: 350px;
  }

  p{
    font-family: 'Karla', sans-serif;
    font-style: italic;
    font-size: 24px;
    margin-bottom: 20px;
    
  }

  //Responsividade Modal

  @media(max-width: 630px) {
    width: 400px;
    height: 400px;

    p{
      font-size: 18px;
      
    }

    button{
      font-size: 18px;
    }

    img{
      max-height: 250px;
    }
  }

  @media(max-width: 430px) {
    width: 300px;
    height: 340px;

    p{
      font-size: 16px;
   
    }
  }
`