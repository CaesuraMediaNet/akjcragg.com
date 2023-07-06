import Layout, { siteTitle }  from '../components/layout';
import Link                   from 'next/link';
import Image                  from 'next/image';
import Footer                 from '../components/Footer';
import calcColumnsH1          from '../functions/calcColumnsH1';
import Grid                   from '@mui/material/Unstable_Grid2';
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

   const pStyle = {
      fontSize : 24,
      padding  : 10,
      margin   : 10,
   }

   return (
      <Layout>
         <div style={{flexDirection : 'row', display: "flex", justifyContent : 'space-between', alignItems : 'center'}}>
            <h1 style={{textAlign: 'left', fontSize : h1FontSize}}>AKJ Cragg | Lens | About</h1>
            <Link style={{fontSize : h1FontSize/2, textDecoration: "underline", color : 'unset'}} href="/">Home</Link>
         </div>
         <Grid container spacing={2}>
            <Grid style={{marginLeft   : 'auto',marginRight  : 'auto',}} md={4}>
               <div
                  style={{
                     marginLeft   : 'auto',
                     marginRight  : 'auto',
                     width        : "90%",
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
                        width: "100%",
                     }}
                  />
               </div>
            </Grid>
            <Grid md={8}>
               <p style={pStyle}>
                  I like to work with digital photographs in a minimal way, without using
                  special effects, just using changes in colour and perspective to create
                  new images.
               </p>
               <p style={pStyle}>
                  On this site you will see a few of my photographs mainly depicting everyday, common things
                  that usually go unnoticed.
               </p>
               <p style={pStyle}>
                  I hope you like them!
               </p>
               <p style={pStyle}>
                  Contact me on andyc &#91; at &#93; akjcragg &#91; dot &#93; com for prints.
               </p>
            </Grid>
         </Grid>
         <Footer />
      </Layout>
   );
}
