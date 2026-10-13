import './DogGod.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function DogGod() {

    useGSAP(() => {

        gsap.from(".god-image", {
            opacity: 0,
            y: 40,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".dog-god",
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                markers: true
            }
        });
    });

    return (
        <section className='dog-god'>
            <div className='dog-god-content'>
                <div className='god-image'></div>
                <div className='dog-god-text-wrap'>
                    <p className='dog-god-heading'>After all, "dog" backwards is "god" for a reason...</p>
                    <em className='dog-prayer'>Lord of Treats, sinful are we, for we didn't feed you on time
                        <br />
                        Grant us your cuddles and everlong devotion
                        <br />
                        For the peace of our souls, at home and far away
                        <br />
                        Wan-men!
                    </em>
                </div>
            </div>
        </section>
    )
}