import React from 'react';
import WhatWeProvide from '../components/WhatWeProvide';
import ServiceHero from '../components/ServiceHero';
import WhyChooseUs from '../components/WhyChooseUs';

function Page() {
    return (
        <div>
            <ServiceHero/>
            <WhatWeProvide />
            <WhyChooseUs />
        </div>
    );
}

export default Page;
