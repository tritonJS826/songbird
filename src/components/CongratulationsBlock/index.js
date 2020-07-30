import { connect } from 'react-redux';

import CongratulationsBlock from './CongratulationsBlock';
import { resetInitialSongBirdData } from '../../redux/actions/creators/songBirdData';

const mapStateToProps = () => ({});

const actionCreators = { resetInitialSongBirdData };

export default connect(mapStateToProps, actionCreators)(CongratulationsBlock);
