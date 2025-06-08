import Image from 'next/image'
import React from 'react'

function HomeHero() {
    return (
        <div className='w-full h-[600px] mt bg-cover bg-center relative'
            style={{ backgroundImage: "url('/dubai/dubai_pkg_card_1.png')" }}>
        </div>
    )
}

export default HomeHero