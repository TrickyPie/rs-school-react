import React, { useState, useEffect } from 'react';

export type ConfirmationPopupProps = {
  message: string;
  hideOn: () => void;
};

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ message, hideOn }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect((): (() => void) => {
    const timeoutId = setTimeout((): void => {
      hide();
    }, 3000);

    return (): void => {
      clearTimeout(timeoutId);
    };
  });

  const hide = (): void => {
    setIsVisible(false);
    hideOn();
  };

  return <div className={`confirmation-popup ${isVisible ? 'visible' : ''}`}>{message}</div>;
};
