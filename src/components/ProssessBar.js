const ProgressBar = () => {
  return (
    <div className="prossess-ber-plugin pt-20">
      <span className="prosses-bar">Community Growth</span>
      <div id="bar1" className="barfiller">
        <div className="tipWrap" style={{ display: 'inline' }}>
          <span
            className="tip"
            style={{
              left: '85%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            85%
          </span>
        </div>
        <span
          className="fill"
          data-percentage={85}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '85%',
            transition: 'width 7s ease-in-out 0s',
          }}
        />
      </div>
      <span className="prosses-bar">Client Trust</span>
      <div id="bar2" className="barfiller">
        <div className="tipWrap" style={{ display: 'inline' }}>
          <span
            className="tip"
            style={{
              left: '90%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            90%
          </span>
        </div>
        <span
          className="fill my-class"
          data-percentage={90}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '90%',
            transition: 'width 7s ease-in-out 0s',
          }}
        />
      </div>
      <span className="prosses-bar">Innovation & Vision</span>
      <div id="bar3" className="barfiller">
        <div className="tipWrap" style={{ display: 'inline' }}>
          <span
            className="tip"
            style={{
              left: '75%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            95%
          </span>
        </div>
        <span
          className="fill my-class2"
          data-percentage={95}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '95%',
            transition: 'width 7s ease-in-out 0s',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
