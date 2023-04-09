import React, { useState, useEffect, useRef } from 'react';
import './plant-modal.css';
import sun from '../../assets/png/contrast.png';
import drop from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import cross from '../../assets/png/cross.png';
import { Slider } from '../../components/slider/Slider';
import { Plant } from '../../components/card/Card';

type Props = {
  id: string;
  parent: Element | null;
  setIsModalOpen: (value: boolean) => void;
};

const PlantModal: React.FC<Props> = ({ id, parent, setIsModalOpen }) => {
  const [data, setData] = useState<Plant | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/TrickyPie/react-api/items/?id=${id}`)
      .then((response: Response) => response.json())
      .then((data): void => {
        if (data[0]) {
          const { id, image, title, description, petFriendly, easyCare, bright, water } = data[0];
          setData({ id, image, title, description, petFriendly, easyCare, bright, water });
        }
      })
      .catch((error: Error): void => console.log(`Error: ${error}`));
  }, [id]);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!modalRef.current?.contains(event.target as Node)) {
      setData(null);
      setIsModalOpen(false);
    }
  };

  if (!parent) {
    return null;
  }

  return (
    <div className="modal-overlay-wrapper" onClick={closeModal} data-testid="modal">
      <div ref={modalRef} className="modal-overlay">
        <div
          className="modal-overlay-close"
          onClick={() => setIsModalOpen(false)}
          data-testid="close-button"
        >
          <img src={cross} alt="Close icon" className="modal-overlay-close-icon" />
        </div>
        <div className="modal-overlay-info-block">
          <div className="modal-overlay-slider">
            <Slider image={data?.image} />
          </div>
          <div className="modal-overlay-data">
            <h3 data-testid="plant-title" className="modal-overlay-title">
              {data?.title ?? ''}
            </h3>
            <p data-testid="plant-description" className="modal-overlay-description">
              {data?.description ?? ''}
            </p>
            <div className="modal-overlay-care-block">
              {data?.petFriendly && (
                <img
                  src={pet}
                  alt="Pet-friendly icon"
                  className="modal-overlay-pet-friendly"
                  title="Pet friendly"
                  data-testid="plant-pet-friendly"
                />
              )}
              {data?.easyCare && (
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
                  {data?.bright ?? ''}
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
                  {data?.water ?? ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;
