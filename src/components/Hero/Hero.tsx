import './Hero.css'

export function Hero() {
    return (
        <div className='hero'>
            <video width={1600} height={850} autoPlay muted loop>
                <source src='./videos/hero-dog.mp4' type='video/mp4' />
            </video>
            <div className='hero-content'>
                <h1>08/26: International Doggo Day!</h1>
            </div>
        </div>
    )
}