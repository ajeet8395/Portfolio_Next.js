import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 flex items-center justify-center">
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera" />
              <div className="display">
                <div className="shade" />
              </div>
              <span>MacBook Air</span>
            </div>
            <title>Layer 1</title>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad" />
              <div className="keyboard">
                {[...Array(76)].map((_, index) => (
                  <div key={index} className={`key ${index >= 60 ? 'f' : ''} ${index === 5 ? 'space' : ''}`} />
                ))}
              </div>
            </div>
            <div className="pad one" />
            <div className="pad two" />
            <div className="pad three" />
            <div className="pad four" />
          </div>
        </div>
        <div className="shadow" />
      </div>
    </div>
  );
};

export default Loader;