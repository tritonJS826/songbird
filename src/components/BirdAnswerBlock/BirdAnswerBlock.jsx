import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import birdsCategories from '../../constants/birdsCategories';
import changeAnswers from '../../helpers/changeAnswers';
import './style.css';
import Button from '../Button';

const BirdAnswerBlock = ({
  level,
  answers,
  setAnswers,
  rightBird,
  setRightBird,
  isReadyForNextLevel,
  setIsReadyForNextLevel,
  addScore,
  additionalScore,
  decreaseAdditionalScore,
  setIsCongratulationsShowed,
  setCurrentBird,
}) => {
  useEffect(() => {
    console.log(level, birdsCategories.length);
    if (level < birdsCategories.length) {
      const { birds } = birdsCategories[level];
      setAnswers(birds);
      setRightBird(birds[Math.floor(Math.random() * birds.length)]);
    } else {
      // выводить поздравления тут (редакс тугл)
      setIsCongratulationsShowed(true);
    }
  }, [level]);

  const answerFunction = ({ target: { dataset: { id } } }) => {
    const rightId = rightBird.id;
    const newAnswers = changeAnswers(answers, id);
    const currentBird = newAnswers.find((el) => el.id === id);
    setCurrentBird(currentBird);
    if (!isReadyForNextLevel) {
      if (rightId === id) {
        setIsReadyForNextLevel(true);
        addScore(additionalScore);
      } else {
        decreaseAdditionalScore();
      }
    }
    setAnswers(newAnswers);
  };

  const answerVariants = answers.map((bird) => (
    <Button
      key={bird.id}
      dataId={bird.id}
      className={(bird.pressed && bird.id === rightBird.id) ? 'answerVariantTrue' : 'answerVariantFalse'}
      text={bird.ruName}
      onClick={answerFunction}
      pressed={bird.pressed}
      isWorking={!bird.pressed}
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
  setAnswers: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  rightBird: PropTypes.objectOf(PropTypes.any).isRequired,
  setRightBird: PropTypes.func.isRequired,
  isReadyForNextLevel: PropTypes.bool.isRequired,
  setIsReadyForNextLevel: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  additionalScore: PropTypes.number.isRequired,
  decreaseAdditionalScore: PropTypes.func.isRequired,
  setIsCongratulationsShowed: PropTypes.func.isRequired,
  setCurrentBird: PropTypes.func.isRequired,
};

export default BirdAnswerBlock;
