import React from 'react';
import coc from '../../Assets/images/Zendesk.png'
import spot from '../../Assets/images/spotify.png'
import ebay from '../../Assets/images/ebay.png'
import coin from '../../Assets/images/coinbase.png'
import visa from '../../Assets/images/Visa.png'
import ancestry from '../../Assets/images/ancestrylogo.png'
import gini from '../../Assets/images/gini.png'
import zoom from '../../Assets/images/Zoom.png'
import ntt from '../../Assets/images/ntt.png'
import uptick from '../../Assets/images/UpTick.png'
import tieto from '../../Assets/images/tieto.png'

const ProUser = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>
                More that 15000 Users Use Pro-Track to simplify their Task
            </h2>

            <div class="main mt-10">
        <marquee class="marq"
                 
                 direction="left" 
                 behavior="scroll"
                 loop=""
                 scrollamount="15">
           <div className='flex gap-5'>
             <img src={coc} width="120" height="80" alt="Natural" />
            <img src={visa} width="120" height="80" alt="Natural" />
            <img src={spot} width="120" height="80" alt="Natural" />
            <img src={ebay} width="120" height="80" alt="Natural" />
            <img src={coin} width="120" height="80" alt="Natural" />
            <img src={ancestry} width="120" height="80" alt="Natural" />
            <img src={zoom} width="120" height="80" alt="Natural" />
            <img src={coc} width="120" height="80" alt="Natural" /></div>
           
        </marquee>
        <marquee class="marq"
                 
                 behavior="scroll"
                 direction="right" 
                 loop=""
                 scrollamount="15"
                 >
                    <div className='flex gap-5'>
                    <img src={coc} width="120" height="80" alt="Natural" />
            <img src={gini} width="120" height="80" alt="Natural" />
            <img src={ntt} width="120" height="80" alt="Natural" />
            <img src={uptick} width="120" height="80" alt="Natural" />
            <img src={tieto} width="120" height="80" alt="Natural" />
            <img src={ancestry} width="120" height="80" alt="Natural" />
            <img src={zoom} width="120" height="80" alt="Natural" />
            <img src={coc} width="120" height="80" alt="Natural" />
            </div>
        </marquee>
    </div>
            {/* <marquee direction="right" scrollamount="30" >
        <div className='grid grid-cols-8 gap-2 mt-5'>
        <img src={visa} alt="" className="rounded-xl" />
            <img src={coc} alt="" className="rounded-xl" />
            <img src={spot} alt="" className="rounded-xl" />
            <img src={ebay} alt="" className="rounded-xl" />
            <img src={coin} alt="" className="rounded-xl" />
        
            <img src={ancestry} alt="" className="rounded-xl" />
            <img src={zoom} alt="" className="rounded-xl" />
            
            
        </div>
        </marquee>
    <marquee direction="left" scrollamount="30"  >
    <div className='grid grid-cols-8 gap-2 mt-5'>
        <img src={visa} alt="" className="rounded-xl" />
            <img src={coc} alt="" className="rounded-xl" />
            <img src={spot} alt="" className="rounded-xl" />
            <img src={ebay} alt="" className="rounded-xl" />
            <img src={coin} alt="" className="rounded-xl" />
        
            <img src={ancestry} alt="" className="rounded-xl" />
            <img src={zoom} alt="" className="rounded-xl" />
            
            
        </div>
    </marquee>
        <div>

        </div> */}
        </div>
    );
};

export default ProUser;