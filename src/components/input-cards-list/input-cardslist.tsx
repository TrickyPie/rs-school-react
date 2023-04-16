import React, { useState } from 'react';
import { InputCard } from '../../components/InputCard/InputCard';
import FormResult from 'pages/page-form/form-type';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';

export const InputCards = () => {
  const [renderedCards, setRenderedCards] = useState<FormResult[]>([]);
  const formCards = useSelector((state: RootState) => state.root.formCards);

  const newCards = formCards.filter((card: FormResult) => !renderedCards.includes(card));

  const handleCardRendered = (card: FormResult) => {
    setRenderedCards([...renderedCards, card]);
  };

  return (
    <>
      {' '}
      <div className="input-cards-container" data-testid="input-cards">
        {newCards.map((card: FormResult, index: React.Key | null | undefined) => (
          <div key={index} data-testid={`card-${index}`}>
            <InputCard ind={`card-${index}`} card={card} onRendered={handleCardRendered} />
          </div>
        ))}
      </div>
    </>
  );
};
