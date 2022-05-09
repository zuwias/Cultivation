import React from 'react'
import { appWindow } from '@tauri-apps/api/window'
import './TopBar.css'
import closeIcon from '../../resources/icons/close.svg'
import minIcon from '../../resources/icons/min.svg'
import cogBtn from '../../resources/icons/cog.svg'

export default class TopBar extends React.Component {
  constructor(props: unknown[]) {
    super(props)
  }

  handleClose() {
    appWindow.close()
  }

  handleMinimize() {
    appWindow.minimize()
  }

  render() {
    return (
      <div className="TopBar" data-tauri-drag-region >
        <div id="title">
          <span>Cultivation</span>
          <span id="version">v0.1.0</span>
        </div>
        <div className="TopBtns">
          <div id="closeBtn" onClick={this.handleClose} className='TopButton'>
            <img src={closeIcon} alt="close" />
          </div>
          <div id="minBtn" onClick={this.handleMinimize} className='TopButton'>
            <img src={minIcon} alt="minimize" />
          </div>
          <div id="settingsBtn" className='TopButton'>
            <img src={cogBtn} alt="settings" />
          </div>
        </div>
      </div>
    )
  }
}