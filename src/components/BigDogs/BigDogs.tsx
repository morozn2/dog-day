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
            end: `+=${section?.scrollHeight}`,
            scrub: true
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
                start: "top 60%",
                end: `+=${section?.scrollHeight}`,
                scrub: true,
                markers: true,
            }
        })

    });

    return (
        <section className='big-dogs'>
            <p className='big-dogs-heading'>...To large</p>
            <div className='big-dogs-wrap'>
                <img src="./big-dogs/mastiff.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/komondor.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/afganian-hound.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/scottish-shepherd.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/akita.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/borzoi.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/newfoundland.png" alt="" className='big-dog-img' />
                <img src="./big-dogs/cane-corso.png" alt="" className='big-dog-img' />
            </div>
        </section>
    )
}