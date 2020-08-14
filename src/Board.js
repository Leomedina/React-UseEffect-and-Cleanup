import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Board = () => {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [cardVisible, setCardVisible] = useState(false)

  useEffect(() => {
    const getNewDeck = async function () {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(res.data);
    };
    getNewDeck();
  }, []);

  useEffect(() => {
    let intervalId = 0;

    if (cardVisible) {
      intervalId = setInterval(() => {
        getCards();
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
      setCards([]);
    };
  }, [cardVisible]);

  const toggleVisible = () => {
    setCardVisible(!cardVisible);

  }

  const getCards = async function () {
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    if (res.data.success) {
      setCards(cards => [
        ...cards, ...res.data.cards
      ]);
    } else {
      alert("No more cards");
    }
  };

  return (
    <>
      <p>
        <button onClick={toggleVisible}>Toggle Cards</button>
      </p>
      {cards && cardVisible ? cards.map(({ value, suit, image, code }) =>
        <Card value={value} suit={suit} image={image} key={code} />) : 'Currently no cards'}
      {}
    </>
  );
}

export default Board;