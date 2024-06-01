// src/components/RulesModal.js
import React from 'react';
import './RulesModal.css';

const RulesModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Game Rules</h2>
        <p>Here are the rules of the game:</p>
        <ul>
          <li>Match 3 or more candies to clear them.</li>
          <li>Match 4 candies in a row or column to get a special candy.</li>
          <li>Match 5 candies to create a super candy.</li>
          <li>Clear the board to score points.</li>
          <li>The game ends when there are no more moves left.</li>
        </ul>
        <button onClick={onClose} className="button dark close-button">Close</button>
      </div>
    </div>
  );
};

export default RulesModal;
