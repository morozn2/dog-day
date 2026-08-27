import './SmallDog.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SmallDog() {

    useGSAP(() => {

        const track = document.querySelector<HTMLElement>(".track");
        
        if (!track) return;

        const getScrollAmount = () => {
            return track.scrollWidth - window.innerWidth;
        }

        gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: ".small-breeds",
                start: "top top",
                end: () => `+=${getScrollAmount()}`,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true
            }
        });
    });

    return (
        <section className='small-breeds'>
            <p className='small-dogs-heading'>From small ones...</p>
            <div className='track'>
                <div className='dog-card'>
                    <img src="./small-dogs/chihuahua.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Chihuahuas</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/pug.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Pugs</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/havanese.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Havanese</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/yorkie.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Yorkies</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/toy-poodle.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Toy poodles</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/shin-tzu.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Shin-tzus</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/dachshund.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Dachshunds</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/griffon.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Griffons</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/pomeranian.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Pomeranians</p>
                </div>
                <div className='dog-card'>
                    <img src="./small-dogs/jack-russell.jpg" alt="" className='dog-img' />
                    <p className='breed-name'>Jack Russels</p>
                </div>
            </div>
        </section>
    )
}