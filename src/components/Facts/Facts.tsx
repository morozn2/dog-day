import './Facts.css'

export function Facts() {
    return (
        <section className='facts'>
            <div className='facts-content'>
                <p className='facts-heading'>Time for interesting facts! <br />
                    Hover a pup to learn a fact about them!</p>
                <div className='dogs-container'>
                    <div className='dog-info-container' id='shepherd-box'>
                        <div className='dog-fact'>
                            <div className='single-fact-heading'>
                                <img src="./icons/brown-paw.png" alt="" className='brown-paw-print' />
                                <b className='fact-breed-name'>German Shepherd Dogs</b>
                            </div>
                            <br />
                            <p>have served alongside soldiers during times of war. Their courage, intelligence,
                                and reliability made them valuable partners on the battlefield, where they carried
                                messages, transported supplies, and assisted troops in challenging conditions.</p>
                        </div>
                    </div>
                    <div className='dog-info-container' id='poodle-box'>
                        <div className='dog-fact'>
                            <div className='single-fact-heading'>
                                <img src="./icons/brown-paw.png" alt="" className='brown-paw-print' />
                                <b className='fact-breed-name'>Poodles</b>
                            </div>
                            <br />
                            <p>were originally water retrievers in Germany, not France, as many believe.
                                Their iconic haircut wasn’t just stylish, it was functional, designed to
                                protect their joints and vital organs from cold water while keeping them agile.</p>
                        </div>
                    </div>
                    <div className='dog-info-container' id='labrador-box'>
                        <div className='dog-fact'>
                            <div className='single-fact-heading'>
                                <img src="./icons/brown-paw.png" alt="" className='brown-paw-print' />
                                <b className='fact-breed-name'>Labradors</b>
                            </div>
                            <br />
                            <p>worked alongside fishermen in Newfoundland. These strong swimmers helped
                                retrieve fishing nets and even pulled in catches from icy waters. Their
                                love for water and eagerness to please made them ideal working dogs.</p>
                        </div>
                    </div>
                    <div className='dog-info-container' id='bulldog-box'>
                        <div className='dog-fact'>
                            <div className='single-fact-heading'>
                                <img src="./icons/brown-paw.png" alt="" className='brown-paw-print' />
                                <b className='fact-breed-name'>Bulldogs</b>
                            </div>
                            <br />
                            <p>were originally bred for bull-baiting,
                                a brutal sport in medieval England. Their low stance, muscular build, and strong
                                jaw were perfect for hanging onto a bull. Thankfully, that sport was banned.</p>
                        </div>
                    </div>
                    <div className='dog-info-container' id='dachshund-box'>
                        <div className='dog-fact'>
                            <div className='single-fact-heading'>
                                <img src="./icons/brown-paw.png" alt="" className='brown-paw-print' />
                                <b className='fact-breed-name'>Dachshunds</b>
                            </div>
                            <br />
                            <p>were designed to hunt badgers. That long, sausage-like body has a purpose! Their name even
                                means “badger dog” in German. Those little legs and big personalities were made for
                                squeezing into burrows and barking until the badger came out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}