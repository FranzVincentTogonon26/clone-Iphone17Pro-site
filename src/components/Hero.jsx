import { useEffect, useState } from "react"
import { isDesktopHero, isMobilHero } from "../utils"

function Hero() {

    const [heroSrc, setHeroSrc] = useState( window.innerWidth < 731 ? isMobilHero : isDesktopHero );

    const handleHeroSrcSet = () => {
        if(window.innerWidth < 731){
            setHeroSrc(isMobilHero);
        } else {
            setHeroSrc(isDesktopHero);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleHeroSrcSet);
        return () => {
            window.removeEventListener('resize', handleHeroSrcSet)
        }
    }, [])


  return (
    <section id="hero">
        <div className="hero-content">
            <img src={heroSrc} alt="Hero" className="screenHeightMedium screenHeightFull screenHeightSmall" />
        </div>
        <div className="hero-footer">
            <a href="">Buy</a>
            <p>From ₱79,990</p>
        </div>
    </section>
  )
}

export default Hero