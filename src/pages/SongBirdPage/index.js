import { connect } from 'react-redux';

import SongBirdPage from './SongBirdPage';
import { increaseLevel } from '../../redux/actions/creators/songBirdData';

const mapStateToProps = () => ({});

const actionCreators = {
  increaseLevel,
};

export default connect(mapStateToProps, actionCreators)(SongBirdPage);
