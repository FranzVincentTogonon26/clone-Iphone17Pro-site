import { useEffect, useState } from "react"
import { heroVideo, isMobilHero } from "../utils"

function Hero() {

    const [heroSrc, setHeroSrc] = useState( window.innerWidth < 732 ? isMobilHero : heroVideo );

    const handleHeroSrcSet = () => {
        if(window.innerWidth < 732){
            setHeroSrc(isMobilHero);
        } else {
            setHeroSrc(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleHeroSrcSet);
        return () => {
            window.removeEventListener('resize', handleHeroSrcSet)
        }
    }, [heroSrc])

    const isVideo = heroSrc === heroVideo;


  return (
    <section id="hero">
        <div className="hero-content" >
            {
            isVideo ? 
                (
                    <video autoPlay muted playsInline={true} className="screenMedium screenWLarge screenHLarge screenWXLarge screenHXLarge">
                        <source src={heroSrc} type="video/mp4"/>
                    </video>
                ) : (
                    <img src={heroSrc} alt="Hero" className="screenSmall" /> 
                )
                }
        </div>
        <div className="hero-footer">
            <a href="">Buy</a>
            <p>From ₱79,990</p>
        </div>
    </section>
  )
}

export default Hero