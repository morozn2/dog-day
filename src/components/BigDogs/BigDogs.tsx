import './BigDogs.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function BigDogs() {
    useGSAP(() => {

        const section = document.querySelector<HTMLElement>(".big-dogs");
        const images = document.querySelectorAll<HTMLElement>(".big-dog-img");

        ScrollTrigger.create({
            trigger: ".big-dogs-heading",
            pin: true,
            start: "top 50%",
            end: `+=500`,
            scrub: true,
        });

        gsap.from(images, {
            y: 80,
            duration: 2.5,
            ease: "power2.out",
            opacity: 0,
            stagger: {
                each: 0.7,
                from: "start",
            },
            scrollTrigger: {
                trigger: section,
                start: "top -10%",
                end: `+=${section?.scrollHeight}`,
                scrub: true,
                markers: true
            }
        })

    });

    return (
        <section className='big-dogs'>
            <p className='big-dogs-heading'>...To large</p>
            <div className='big-dogs-wrap'>
                <img src="./big-dogs/mastiff.jpg" alt="" className='big-dog-img mastiff' />
                <img src="./big-dogs/komondor.jpg" alt="" className='big-dog-img komondor' />
                <img src="./big-dogs/afgan-hound.jpg" alt="" className='big-dog-img afgan' />
                <img src="./big-dogs/kolli.jpg" alt="" className='big-dog-img kolli' />
                <img src="./big-dogs/akita.jpg" alt="" className='big-dog-img akita' />
                <img src="./big-dogs/borzoi.jpg" alt="" className='big-dog-img borzoi' />
                <img src="./big-dogs/newfoundland.jpg" alt="" className='big-dog-img newfoundland' />
                <img src="./big-dogs/cane-corso.jpg" alt="" className='big-dog-img cane-corso' />
            </div>
        </section>
    )
}