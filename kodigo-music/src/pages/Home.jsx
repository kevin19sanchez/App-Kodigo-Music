import React from 'react'
import HeroSection from '../components_home/HeroSection'
import PlaylistSection from '../components_home/PlaylistSection'
import RecommendedSection from '../components_home/RecommendedSection'
import RecentlyPlayedSection from '../components_home/RecentlyPlayedSection'

const Home = () => {
    return (
        <div>
            <main>
                <HeroSection />
                <PlaylistSection />
                <RecommendedSection />
                <RecentlyPlayedSection />
            </main>
        </div>
    )
}

export default Home
