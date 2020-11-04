import React, { Component } from 'react';
import downloadButton from '../assets/download-metamask.png';

class DownloadMetaMaskButton extends Component {
  render() {
    return (
      <a href="https://metamask.io">
        <img className="downloadButton" src={downloadButton} alt="Download MetaMask"/>
      </a>
    )
  }
}

export default DownloadMetaMaskButton