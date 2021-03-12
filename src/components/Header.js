import { Component } from 'react'
import logoArrow from '../img/logo-arrow.png'
import logoText from '../img/logo-text.png'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div>
                    <img src={logoArrow} className="App-logo w-100 h-auto" alt="logo" />
                </div>
                <div>
                    <img src={logoText} className="my-4" alt="logo" />
                </div>
            </header>
        )
    }
}

export default Header