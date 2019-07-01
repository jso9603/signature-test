import React from 'react';
import SignatureCanvas from "react-signature-canvas";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signature: ''
    }

    this.sigCanvas = React.createRef();
  }

  saveSignature = () => {
    console.log(this.sigCanvas.toDataURL());
    this.setState({ signature: this.sigCanvas.toDataURL() });
  };

  againgSignature = () => {
    this.sigCanvas.clear();
    this.setState({ signature: '' })
  }

  render() {
    return (
      <div>
        <h1>Signature</h1>
        <div style={{ backgroundColor: '#f1f1f1' }}>
          <span className="description">서명을 해주세요.</span>
          <SignatureCanvas
            ref={(ref) => { this.sigCanvas = ref }}
            canvasProps={{width: 375, height: 200, className: 'sigCanvas'}}
          />
        </div>
        <button
          className="ok"
          onClick={this.saveSignature}
        >
          확인
        </button>
        <br/>
        <button
          className="reset"
          onClick={this.againgSignature}
        >
          다시쓰기
        </button>
        <br/><br/><br/>

        <div>
          <h1>Result</h1>
          <img src={this.state.signature} />
        </div>
      </div>
    );
  }
}

export default App;
