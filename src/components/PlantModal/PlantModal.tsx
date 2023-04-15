import React, { useState, useEffect } from 'react';
import './plant-modal.css';
import sun from '../../assets/png/contrast.png';
import drop from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import cross from '../../assets/png/cross.png';
import { Slider } from '../../components/slider/Slider';
import { Plant } from '../../components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { resetCardId, RootState } from '../../redux/reducer';
import { fetchPlantById } from './plant-thunk';
import { AppDispatch } from '../../store';
import Loader from '../../components/loader/Loader';

export const useAppDispatch = () => useDispatch();

export const PlantModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardId = useSelector((state: RootState) => state.root.cardId);
  const selectedCard = useSelector((state: RootState) => state.card.entities);
  const plantLoading = useSelector((state: RootState) => state.card.plantLoading);
  const plantError = useSelector((state: RootState) => state.card.plantError);
  const [currentCard, setCurrentCard] = useState<Plant | null>(null);

  useEffect(() => {
    if (cardId) {
      dispatch(fetchPlantById(cardId));
    }
  }, [cardId, dispatch]);

  useEffect(() => {
    if (cardId) {
      if (selectedCard[cardId]) {
        setCurrentCard(selectedCard[cardId]);
      }
    }
  }, [selectedCard, cardId]);

  if (cardId && plantLoading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (cardId && plantError) {
    return (
      <div className="not-found" data-testid="error-message">
        Sorry, we have problem with API. Please, try later.
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  const closeModal = () => {
    setCurrentCard(null);
    dispatch(resetCardId());
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    closeModal();
  };

  return (
    <>
      <div className="modal-overlay-wrapper" data-testid="modal" onClick={handleModalClick}>
        <div className="modal-overlay">
          <div className="modal-overlay-close" data-testid="close-button" onClick={closeModal}>
            <img src={cross} alt="Close icon" className="modal-overlay-close-icon" />
          </div>
          <div className="modal-overlay-info-block">
            <div className="modal-overlay-slider">
              <Slider image={currentCard?.image} />
            </div>
            <div className="modal-overlay-data">
              <h3 data-testid="plant-title" className="modal-overlay-title">
                {currentCard?.title ?? ''}
              </h3>
              <p data-testid="plant-description" className="modal-overlay-description">
                {currentCard?.description ?? ''}
              </p>
              <div className="modal-overlay-care-block">
                {currentCard?.petFriendly && (
                  <img
                    src={pet}
                    alt="Pet-friendly icon"
                    className="modal-overlay-pet-friendly"
                    title="Pet friendly"
                    data-testid="plant-pet-friendly"
                  />
                )}
                {currentCard?.easyCare && (
                  <img
                    src={care}
                    alt="Easy-care icon"
                    className="modal-overlay-care"
                    title="Easy care"
                    data-testid="plant-easy-care"
                  />
                )}
              </div>

              <div className="modal-overlay-info">
                <div className="modal-overlay-sun-wrapper">
                  <img
                    className="modal-overlay-sun-icon"
                    src={sun ?? ''}
                    alt=""
                    data-testid="plant-sun-icon"
                  />
                  <p className="modal-overlay-sun-info" data-testid="plant-bright-info">
                    {currentCard?.bright ?? ''}
                  </p>
                </div>
                <div className="modal-overlay-water-wrapper">
                  <img
                    className="modal-overlay-water-icon"
                    src={drop ?? ''}
                    alt=""
                    data-testid="plant-water-icon"
                  />
                  <p className="modal-overlay-water-info" data-testid="plant-water-info">
                    {currentCard?.water ?? ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantModal;
