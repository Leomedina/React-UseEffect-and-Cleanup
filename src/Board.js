import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Board = () => {
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const getNewDeck = async function () {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(res.data);
    };
    getNewDeck();
  }, []);



  return (
    <>
      <button>Hit Me</button>
      <Card
        image="https://deckofcardsapi.com/static/img/KH.png"
        value="KING"
        suit="HEARTS"
        key="KH"
      />
    </>
  );
}

export default Board;