import React from 'react';

const CtaCard = () => {
    const settings = (window.flights_engine && window.flights_engine.settings) ? window.flights_engine.settings : {};

    return (
        <div className='cta-top-area'>
            <div className="cta-top">
                <p><strong>Save even more.</strong> Talk to our booking expert now.</p>
                <p className='online'><span>Agent is available now</span> 24/7 SUPPORT | NO HOLD TIME</p>
                <a style={{ fontSize: '25px' }} href={settings.phone ? `tel:${settings.phone.replace(/[^0-9]/g, '')}` : 'tel:8882112111'}>{settings.phone ? settings.phone : '(888) 211.2111'}</a>
            </div>
        </div>
    );
};

export default CtaCard;