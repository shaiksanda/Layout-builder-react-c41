import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const handleOnchangeInputContent = event => {
            onToggleShowContent(event.target.checked)
          }

          const handleOnchangeInputLeft = event => {
            onToggleShowLeftNavbar(event.target.checked)
          }

          const handleOnchangeInputRight = event => {
            onToggleShowRightNavbar(event.target.checked)
          }

          return (
            <div className="config-bg-container">
              <h1 className="main-heading">Layout</h1>
              <div className="input-container">
                <input
                  checked={showContent}
                  type="checkbox"
                  id="content"
                  className="input"
                  onChange={handleOnchangeInputContent} // Use context function
                />
                <label htmlFor="content" className="label">
                  Content
                </label>
              </div>
              <div className="input-container">
                <input
                  checked={showLeftNavbar}
                  type="checkbox"
                  id="left"
                  className="input"
                  onChange={handleOnchangeInputLeft} // Use context function
                />
                <label htmlFor="left" className="label">
                  Left Navbar
                </label>
              </div>
              <div className="input-container">
                <input
                  checked={showRightNavbar}
                  onChange={handleOnchangeInputRight} // Use context function
                  type="checkbox"
                  id="right"
                  className="input"
                />
                <label htmlFor="right" className="label">
                  Right Navbar
                </label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
