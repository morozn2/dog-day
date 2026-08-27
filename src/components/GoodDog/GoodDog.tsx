import './GoodDog.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GoodDog() {

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".top-p", {
            opacity: 0,
            y: 40,
            scrollTrigger: {
                trigger: ".good-dog-body",
                start: "top 80%",
                end: "top 40%",
                scrub: true
            }
        });

        gsap.from(".nose-pic", {
            scale: 0,
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".good-dog-body",
                start: "top 70%",
                end: "top 15%",
                scrub: true
            }
        });

        gsap.from(".bottom-p-wrap", {
            opacity: 0,
            y: 60,
            scrollTrigger: {
                trigger: ".good-dog-body",
                start: "top 12%",
                end: "top 0%",
                scrub: true,
                markers: true
            }
        })
    });


    return (
        <section className='good-dog-body'>
            <p className='top-p'>Every dog is</p>
            <div className='nose-pic'>
                <div className='bottom-p-wrap'>
                    <p id='G'>G</p>
                    <p id='D'>D</p>
                </div>
            </div>
        </section>
    )
}