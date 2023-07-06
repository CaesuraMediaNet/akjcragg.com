import Layout, { siteTitle }  from '../components/layout';
import Link                   from 'next/link';
import Image                  from 'next/image';
import Footer                 from '../components/Footer';
import calcColumnsH1          from '../functions/calcColumnsH1';
import { useState }           from 'react';
import { useEffect }          from 'react';
import { useRef }             from 'react';

export default function About () {
   const [h1FontSize, setH1FontSize]        = useState(65);
   const updateSize = () => {
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
   }
   useEffect(() => {
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
      window.onresize = updateSize;
   }, []);

   return (
      <Layout>
         <div style={{flexDirection : 'row', display: "flex", justifyContent : 'space-between', alignItems : 'center'}}>
            <h1 style={{textAlign: 'left', fontSize : h1FontSize}}>AKJ Cragg | Lens | About</h1>
            <Link style={{fontSize : h1FontSize/2, textDecoration: "underline", color : 'unset'}} href="/">Home</Link>
         </div>
         <div style={{textAlign : 'center'}}>
            <div
               style={{
                  marginLeft   : 'auto',
                  marginRight  : 'auto',
                  width        : 250,
                  borderRadius : '0.2rem',
                  overflow     : 'hidden',
                  border       : '1px solid rgba(0, 0, 0, 1.0)',
                  padding      : 10,
                  boxShadow    : '0px 0px 15px 5px #D2D6C5',
               }}
            >
               <img
                  src={'/img/Craz.jpg?w=162&auto=format'}
                  srcSet={'/img/Craz.jpg?w=162&auto=format&dpr=2 2x'}
                  alt={"Image of the word Crazy, with no Y"}
                  loading="lazy"
                  style={{
                     width: 250,
                  }}
               />
            </div>
            <p>
               I like to work with digital photographs in a minimal way, without using
               special effects, just using changes in colour and perspective to create
               new images.
            </p>
            <p>
               On this site you will see a few of my photographs mainly depicting everyday, common things
               that usually go unnoticed.
            </p>
            <p>
               I hope you like them!
            </p>
            <p>
               Contact me on andyc [ at ] akjcragg [ dot ] com for prints.
            </p>

         </div>
         <Footer />
      </Layout>
   );
}
