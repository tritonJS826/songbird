import { connect } from 'react-redux';

import BirdAnswerBlock from './BirdAnswerBlock';
// import increaseLevel from '../../redux/actions/creators/songBirdData';

const mapStateToProps = ({
  birdAnswerBlock: { pressedButtons },
  songBirdData: { level },
}) => ({
  level,
  pressedButtons,
});

const actionCreators = { };

export default connect(mapStateToProps, actionCreators)(BirdAnswerBlock);
