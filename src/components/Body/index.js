// Write your code here// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent, showLeftNavbar, showRightNavbar)
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="navbar">
              <h1 className="navbar-heading">Left Navbar Menu</h1>
              <div className="navbar-items-container">
                <p className="item">Item 1</p>
                <p className="item">Item 2</p>
                <p className="item">Item 3</p>
                <p className="item">Item 4</p>
              </div>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="content-heading">Content</h1>
              <p className="description">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore manga aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="navbar">
              <h1 className="navbar-heading">Right Navbar</h1>
              <div className="ad-container">
                <div className="ad">
                  <h1 className="ad-heading">Ad 1</h1>
                </div>
                <div className="ad">
                  <h1 className="ad-heading">Ad 2</h1>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
