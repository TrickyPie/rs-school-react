import React, { useState, useEffect } from 'react';
import './plant-modal.css';
import sun from '../../assets/png/contrast.png';
import drop from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import cross from '../../assets/png/cross.png';
import { Slider } from '../../components/slider/Slider';
import { Plant } from '../../components/card/Card';

type Props = {
  id: number;
  parent: Element | null;
  setIsModalOpen: (value: boolean) => void;
};

const PlantModal: React.FC<Props> = ({ id, parent, setIsModalOpen }) => {
  const [data, setData] = useState<Plant | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsDataLoaded(false);
    setIsLoading(true);
    fetch(`https://my-json-server.typicode.com/TrickyPie/react-api/items/?id=${id}`)
      .then((response: Response) => response.json())
      .then((data): void => {
        setTimeout(() => {
          const { id, image, title, description, petFriendly, easyCare, bright, water } = data[0];
          setData({ id, image, title, description, petFriendly, easyCare, bright, water });
          setIsLoading(false);
          setIsDataLoaded(true);
        }, 13000);
      })
      .catch((error: Error): void => console.log(`Error: ${error}`));
  }, [id]);

  const closeModal = () => {
    setData(null);
    setIsDataLoaded(false);
    setIsModalOpen(false);
  };

  if (!parent) {
    return null;
  }

  return (
    <div className="modal-overlay-wrapper" onClick={closeModal}>
      {isLoading && (
        <p className="loading">
          Loading<span className="dots"></span>
        </p>
      )}
      {isDataLoaded && !isLoading && (
        <div className="modal-overlay">
          <div className="modal-overlay-close" onClick={closeModal}>
            <img src={cross} alt="Close icon" className="modal-overlay-close-icon" />
          </div>
          <div className="modal-overlay-info-block">
            <div className="modal-overlay-slider">
              <Slider image={data?.image} />
            </div>
            <div className="modal-overlay-data">
              <h3 className="modal-overlay-title">{data?.title ?? ''}</h3>
              <p className="modal-overlay-description">{data?.description ?? ''}</p>
              <div className="modal-overlay-care-block">
                {data?.petFriendly && (
                  <img
                    src={pet}
                    alt="Pet-friendly icon"
                    className="modal-overlay-pet-friendly"
                    title="Pet friendly"
                  />
                )}
                {data?.easyCare && (
                  <img
                    src={care}
                    alt="Easy-care icon"
                    className="modal-overlay-care"
                    title="Easy care"
                  />
                )}
              </div>

              <div className="modal-overlay-info">
                <div className="modal-overlay-sun-wrapper">
                  <img className="modal-overlay-sun-icon" src={sun ?? ''} alt="" />
                  <p className="modal-overlay-sun-info">{data?.bright ?? ''}</p>
                </div>
                <div className="modal-overlay-water-wrapper">
                  <img className="modal-overlay-water-icon" src={drop ?? ''} alt="" />
                  <p className="modal-overlay-water-info">{data?.water ?? ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantModal;
