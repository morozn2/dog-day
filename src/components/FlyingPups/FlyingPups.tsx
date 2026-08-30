import './FlyingPups.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function FlyingPups() {

    useGSAP(() => {
        gsap.to(".pup-and-bone", {
            x: -1880,
            y: 250,
            ease: "none",
            scrollTrigger: {
                trigger: ".flying-pups",
                start: "top 70%",
                end: "+=800",
                scrub: true
            }
        });

        gsap.to(".big-pup-and-bone", {
            x: 2000,
            y: 250,
            ease: "none",
            scrollTrigger: {
                trigger: ".flying-pups",
                start: "top 30%",
                end: "+=800",
                scrub: true
            }
        });
    });

    return (
        <section className='flying-pups'>
            <div className='pup-and-bone'>
                <img src="./icons/bone.png" alt="" className='bone-small' />
                <img src="./small-dogs/flying-chihuahua.png" alt="" className='chihuahua' />
            </div>
            <div className='big-pup-and-bone'>
                <img src="./big-dogs/flying-big-dog.png" alt="" className='big-dog' />
                <img src="./icons/bone.png" alt="" className='bone-big' />
            </div>
        </section>
    )
}