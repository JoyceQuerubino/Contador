import React, { Fragment, useEffect, useState } from "react";

import { Container, Card, Title, Counter, Button, Count, Modal } from "./style";

export default function Home() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [challengeMessage, setChallengeMessage] = useState();

  const [warning, setWarning] = useState({
    message: "", //Posso colocar null, 0, 'vazio';
    url: "",
  });

  //tornando a função dinamica
  const handleWarning = (message, url) => {
    setWarning({
      message: message,
      url: url,
    });
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);

    if (count === 4) {
      setModalOpen(true);
      //Add os valores ao objeto
      handleWarning(
        "Já ta bom né? Já apertou bastante!",
        "https://media.giphy.com/media/cKKXNlTYino7hWNXwl/giphy.gif"
      );
    } else if (count === 9) {
      setModalOpen(true);
      handleWarning(
        "Falei pra parar!",
        "https://media.giphy.com/media/1zkVuO55wfgDC/giphy.gif"
      );
      setChallengeMessage("Quero ver apertar agora!");
    }
  };

  const handleModal = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <Title>Contador</Title>
          <p className="challenge">{challengeMessage}</p>
          <Counter>
            <Button onClick={() => handleRemove()}>-</Button>
            <Count>{count}</Count>

            <div className="square">
              <Button onClick={() => handleAdd()} disabled={count === 10}>
                +
              </Button>
            </div>
          </Counter>
          {modalOpen && (
            <Modal>
              <button onClick={() => handleModal()} type="button">
                X
              </button>
              <p>{warning.message}</p>
              <img src={warning.url} type="img" />
            </Modal>
          )}
        </Card>
      </Container>
    </Fragment>
  );
}
