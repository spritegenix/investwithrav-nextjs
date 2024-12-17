const ProgressBar = () => {
  return (
    <div className="prossess-ber-plugin pt-20">
      <span className="prosses-bar">Community Growth</span>
      <div id="bar1" className="barfiller">
        <div className="tipWrap" style={{ display: 'inline' }}>
          <span
            className="tip"
            style={{
              left: '100%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            100%
          </span>
        </div>
        <span
          className="fill"
          data-percentage={100}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '100%',
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
              left: '100%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            100%
          </span>
        </div>
        <span
          className="fill my-class"
          data-percentage={100}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '100%',
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
              left: '100%',
              transition: 'left 7s ease-in-out 0s',
            }}
          >
            100%
          </span>
        </div>
        <span
          className="fill my-class2"
          data-percentage={100}
          style={{
            background: 'rgb(22, 181, 151)',
            width: '100%',
            transition: 'width 7s ease-in-out 0s',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
