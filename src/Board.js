import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Board = () => {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getNewDeck = async function () {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(res.data);
    };
    getNewDeck();
  }, []);


  const getCard = async function () {
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    setCards(cards => [
      ...cards, ...res.data.cards
    ]);
  };

  return (
    <>
      <button onClick={getCard}>Hit Me</button>
      <p>
        {cards ? cards.map(({ value, suit, image, key }) =>
          <Card value={value} suit={suit} image={image} key={key} />) : 'Currently no cards'}
        {}
      </p>
    </>
  );
}

export default Board;