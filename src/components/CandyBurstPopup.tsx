// src/components/CandyBurstPopup.tsx
import React from 'react';

interface CandyBurstPopupProps {
  message: string;
  visible: boolean;
}

const CandyBurstPopup: React.FC<CandyBurstPopupProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CandyBurstPopup;
