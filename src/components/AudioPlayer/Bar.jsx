import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Bar = ({ duration, curTime, onTimeUpdate }) => {
  const barRef = useRef(null);

  const curPercentage = (curTime / duration) * 100;

  const formatDuration = (durationSec) => Math.floor(durationSec);

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;

    const barStart = barRef.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = barRef.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  useEffect(() => {
    // console.log(barRef.current);
  }, [barRef]);

  return (
    <div className="bar">
      <span className="bar__time">{formatDuration(curTime)}</span>
      <div
        ref={(el) => { barRef.current = el; }}
        className="bar__progress"
        role="button"
        tabIndex={0}
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`,
        }}
        onMouseDown={handleTimeDrag}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="bar__time">{formatDuration(duration)}</span>
    </div>
  );
};

Bar.defaultProps = {
  duration: 0,
  curTime: 1,
  onTimeUpdate: () => {},
};

Bar.propTypes = {
  duration: PropTypes.number,
  curTime: PropTypes.number,
  onTimeUpdate: PropTypes.func,
};

export default Bar;
