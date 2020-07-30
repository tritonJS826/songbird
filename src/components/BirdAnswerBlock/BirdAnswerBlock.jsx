import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import birdsCategories from '../../constants/birdsCategories';
import Button from '../Button';

const BirdAnswerBlock = ({ level }) => {
  const answerVariants = birdsCategories[level].birds.map((bird) => (
    <Button
      className="birdButton"
      text={bird.ruName}
      onClick={() => alert('рассчитай-посчитай')}
      pressed={bird.pressed}
      key={bird.id}
    />
  ));

  return (
    <div className="c">
      {answerVariants}
    </div>
  );
};

BirdAnswerBlock.propTypes = {
  level: PropTypes.number.isRequired,
};

export default BirdAnswerBlock;
