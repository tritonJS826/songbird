import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ songName, songArtist, img }) => (
  <div className="song">
    <div>
      <h1 className="song__title">{songName}</h1>
      <h2 className="song__artist">{songArtist}</h2>
    </div>
    <img src={img} alt="" className="song__image" />
  </div>
);

Song.defaultProps = {
  songName: '',
  songArtist: '',
  img: '',
};

Song.propTypes = {
  songName: PropTypes.string,
  songArtist: PropTypes.string,
  img: PropTypes.string,
};

export default Song;
