import './Navbar.css'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>Hansoo</a>
                </div>
                <div className="right">
                    <h1>Right Side</h1>
                </div>
            </div>
        </div>
    )
}
