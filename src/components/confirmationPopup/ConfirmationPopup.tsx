import React, { useState, useEffect } from 'react';

type ConfirmationPopupProps = {
  message: string;
  hideOn: () => void;
};

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ message, hideOn }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hide();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  const hide = () => {
    setIsVisible(false);
    hideOn();
  };

  return <>{isVisible && <div className="confirmation-popup">{message}</div>}</>;
};
