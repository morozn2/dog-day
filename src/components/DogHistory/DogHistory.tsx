import './DogHistory.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function DogHistory() {

    useGSAP(() => {
        const image = document.getElementById("history-img")

        if (!image) return;

        ScrollTrigger.create({
            trigger: image,
            start: "top 20%",
            end: '+=1300',
            scrub: true,
            pin: true
        });
    });

    return (
        <section className='dog-history'>
            <div className='heading-wrap'>
                <p className='dog-hist-heading'>DOGGO HISTORY</p>
                <p className='dog-hist-pre-heading'>All of us are used to variety of breeds we have now.<br />
                    But they didn't appear from thin air</p>
            </div>
            <div className='history-main-container'>
                <div className='history-text-container'>
                    <div className='text-wrap'>
                        <p className='scroll-section-heading'>1. Wild origins</p>
                        <p className='scroll-section-desc'>As we all know, our fluffy friends originated from wolves.
                            They began coming closer to people more than 20,000 years ago, attracted by tribes' leftover food</p>
                    </div>
                    <div className='text-wrap'>
                        <p className='scroll-section-heading'>2. The start of friendship</p>
                        <p className='scroll-section-desc'>Eventually, wolves started putting their trust in humans and help them to with everyday tasks like hunting</p>
                    </div>
                    <div className='text-wrap'>
                        <p className='scroll-section-heading'>3. Full domestication</p>
                        <p className='scroll-section-desc'>In the end, the feral beasts grew attached and became dependent on us. From that time, people invented more than 300 breeds and continue to develop more</p>
                    </div>
                </div>
                <div className='history-img-container'>
                    <div className='wolf-img' id='history-img'></div>
                </div>
            </div>
        </section>
    )
}