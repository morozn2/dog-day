import './Header.css'

export function Header() {
    return (
        <header>
            <div className='header-body'>
                <div className='header-left-side'>
                    <div className='logo-wrap'>
                        <img src="/icons/paw.svg" alt="Paw print" className='logo' />
                    </div>
                    <hr className='header-hr'/>
                    <nav>
                        <a href="">Blog</a>
                        <a href="">About Us</a>
                        <a href="">Help Doggos</a>
                    </nav>
                </div>
                <div className='header-right-side'>
                    <a href="">Sign In</a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </header>
    )
}