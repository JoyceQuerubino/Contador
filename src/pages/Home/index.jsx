import React, { Fragment, useState } from "react";

import imgNormal from "../../images/img1.png";
import imgangry from "../../images/img2.png";
import imgEnd from "../../images/img3.png";
import imgHappy from "../../images/img4.png";

import { Container, Card, Title, Counter, Button, Count, Modal } from "./style";

export default function Home() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [challengeMessage, setChallengeMessage] = useState(
    "Esse é o contador do pato Donald!"
  );
  const [logo, setLogo] = useState(imgNormal);

  const [warning, setWarning] = useState({
    message: "", //Posso colocar null, 0, 'vazio';
    url: "",
  });

  //função logo
  const handleLogo = () => {
    if (count === 0) {
      setLogo(imgNormal);
    } else if (count < 0) {
      setLogo(imgangry);
    } else if (count > 0 && count < 6) {
      setLogo(imgHappy);
    } else if (count === 6) {
      setLogo(imgEnd);
    }
  };

  //tornando a função dinamica
  const handleWarning = (message, url) => {
    setWarning({
      message: message,
      url: url,
    });
  };

  const handleRemove = () => {
    setCount(count - 1);
    handleLogo();

    //Negativos
    if (count === -2) {
      setModalOpen(true);
      handleWarning(
        "Você negativou a conta do Pato Donald!",
        "https://media.giphy.com/media/Km2YiI2mzRKgw/giphy.gif"
      );
    } else if (count === -4) {
      setModalOpen(true);
      handleWarning(
        "Como pode fazer isso?",
        "https://media.giphy.com/media/eka6qC0NF0K7C/giphy.gif"
      );
    } else if (count === -6) {
      setModalOpen(true);
      handleWarning(
        "Já chega, ele está chorando!",
        "https://media.giphy.com/media/11zX0ZOr4GHL7a/giphy.gif"
      );
      setChallengeMessage("Pode começar a dar dinheiro pra ele!");
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
    handleLogo();

    if (count === 2) {
      setModalOpen(true);
      //Add os valores ao objeto
      handleWarning(
        "Obah! Você deu dinheiro para o pato Donald",
        "https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif"
      );
    } else if (count === 4) {
      setModalOpen(true);
      //Add os valores ao objeto
      handleWarning(
        "Já chega, ele é muito ganancioso.",
        "https://media.giphy.com/media/146VLy0Dn1maDC/giphy.gif"
      );
      setChallengeMessage("Melhor parar eim...");
    } else if (count === 6) {
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
          <img src={logo} type="img" alt="logo" className="logo" />
          <Title>Contador</Title>
          <p className="challenge">{challengeMessage}</p>
          <Counter>
            <Button
              onClick={() => handleRemove()}
              disabled={count === 7 || count === -7}
              none={count === 7 || count === -7}
            >
              -
            </Button>
            <Count>{count}</Count>

            <div className="square">
              <Button
                onClick={() => handleAdd()}
                disabled={count === 7}
                off={count === 7}
              >
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
              <img src={warning.url} type="img" alt="Gif representativo" />
            </Modal>
          )}
        </Card>
      </Container>
    </Fragment>
  );
}
