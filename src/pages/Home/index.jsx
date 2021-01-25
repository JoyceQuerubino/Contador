import React, { Fragment, useEffect, useState } from "react";

import { Container, Card, Title, Counter, Button, Count, Modal } from "./style";

export default function Home() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [menssage, setMenssage] = useState();

  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);

    if (count === 5) {
      setModalOpen(true);
      setMenssage("Já ta bom né? Já apertou bastante!");
    } else if (count === 9) {
      setMenssage("Falei pra parar!");
      setModalOpen(true);
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
          <Counter>
            <Button onClick={() => handleRemove()}>-</Button>
            <Count>{count}</Count>
            <Button onClick={() => handleAdd()}>+</Button>
          </Counter>
          {modalOpen && (
            <Modal>
              <button onClick={() => handleModal()} type="button">
                X
              </button>
              <p>{menssage}</p>
              <img
                src={
                  "https://media.giphy.com/media/cKKXNlTYino7hWNXwl/giphy.gif"
                }
                type="img"
              />
            </Modal>
          )}
        </Card>
      </Container>
    </Fragment>
  );
}
