import type { JSX } from 'react';
import { useState } from 'react';
import type { Services } from '../../data/services';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ServicesSection from '../ServicesSection/ServicesSection';
import Cart from '../Cart/Cart';

import '../../reset.css';

const App = (): JSX.Element => {
    const [selectedServices, setSelectedServices] = useState<Services[]>([]);

    return (
        <div className='wrapper'>
            <Header />
            <main className="main container">
                <ServicesSection
                    selectedServices={selectedServices}
                    setSelectedServices={setSelectedServices} />
                <Cart
                    selectedServices={selectedServices}
                    setSelectedServices={setSelectedServices} />
            </main>
            <Footer />
        </div>
    )
}

export default App;