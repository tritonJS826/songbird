import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Header from '../../components/Header';
import BirdInformationBlock from '../../components/BirdInformationBlock';
import BirdAnswerBlock from '../../components/BirdAnswerBlock';
import './style.css';

function SongBirdPage({ increaseLevel }) {
  return (
    <div className="container">
      <Header />
      <BirdInformationBlock />
      <div className="gorizontalDiv">
        <BirdAnswerBlock />
        <BirdInformationBlock broad />
      </div>
      <Button
        text="Next Level"
        onClick={increaseLevel}
      />
    </div>
  );
}

SongBirdPage.propTypes = {
  increaseLevel: PropTypes.func.isRequired,
};

export default SongBirdPage;
