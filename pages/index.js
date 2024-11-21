// Next.js
//
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/akjcragg.module.css';
import Layout, { siteTitle } from '../components/layout';

// React.js
//
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// External React Libraries.
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faUserSecret,
   faQuestion,
   faEnvelope,
   faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'

// MUI Material UI
//
import Box     from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

// Local components.
//
import Footer            from '../components/Footer';
import useProgressiveImg from '../components/useProgressiveImg';

// Local functions.
//
import calcColumnsH1     from '../functions/calcColumnsH1';

// Fancybox.
//
import Fancybox           from '../components/Fancybox';


// Constants.
//
import {
   ImageListPopular,
   ImageListBW,
   ImageListNature,
   ImageListViews,
   ImageListOddities,
   ImageListLensArt,
   ImageListCardiff,
   ImageListNeon,
   ImageListWarm,
   ImageListWorthing,
} from '../constants';
const sections = [
   {
      title : "Top Pics",
      list : ImageListPopular,
   },
   {
      title : "Nature",
      list : ImageListNature,
   },
   {
      title : "Views",
      list : ImageListViews,
   },
   {
      title : "Oddities",
      list : ImageListOddities,
   },
   {
      title : "Lens Art",
      list : ImageListLensArt,
   },
   {
      title : "National Museum Cardiff",
      list  : ImageListCardiff,
   },
   {
      title : "Neon",
      list  : ImageListNeon,
   },
   {
      title : "MonoChrome",
      list : ImageListBW,
   },
   {
      title : "Warm",
      list  : ImageListWarm,
   },
   {
      title : "Worthing",
      list  : ImageListWorthing,
   },
];

// www.akjcragg.com
//
export default function AKJCragg () {
   const [numColumns, setNumColumns]        = useState(3);
   const [h1FontSize, setH1FontSize]        = useState(65);

   const updateSize = () => {
      setNumColumns(calcColumnsH1(window).thisNumColumns);
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
   }
   useEffect(() => {
      setNumColumns(calcColumnsH1(window).thisNumColumns);
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
      window.onresize = updateSize;
   }, []);

   function AkjImage ({ item }) {
      const [src, { blur }] = useProgressiveImg(item.replace(/img\/main/, 'img/blur'), item);
      return (
         <img
            src={`${src}?w=162&auto=format`}
            srcSet={`${src.replace(/main/, 'small')} 333w, ${src.replace(/main/, 'medium')} 666w, ${src} 1000w`}
            alt={item}
            loading="lazy"
            style={{
               display: 'block',
               width: '100%',
               filter: blur ? "blur(20px)" : "none",
               transition: blur ? "none" : "filter 0.2s ease-out"
            }}
         />
      );
   }
   return (
      <Layout>
         <div style={{flexDirection : 'row', display: "flex", justifyContent : 'space-between', alignItems : 'center'}}>
            <h1 style={{textAlign: 'left', fontSize : h1FontSize}}>AKJ Cragg | Lens</h1>
            <Link style={{fontSize : h1FontSize/2, textDecoration: "underline", color : 'unset'}} href="/about">About</Link>
         </div>
         <div style={{textAlign : 'left'}}>
            {sections.map((section, sindex) => {
               if (section.title == "Top Pics") return ;
               return (
                  <span key={sindex}>
                     <Link
                        style={{fontSize : h1FontSize/4, textDecoration: "underline", color : 'unset'}}
                        href={'#anchor-' + section.title}
                     >
                        {section.title}
                     </Link>
                     <span>&nbsp;&nbsp;</span>
                  </span>
               )
            })}
         </div>
         <Fancybox
            options={{
               Carousel: {
                  infinite: true,
               },
            }}
         >
            {sections.map((section, sindex) => (
               <div key={sindex}>
                  <h2 id={'anchor-' + section.title}>{section.title === "Top Pics" ? "" : section.title}</h2>
                  <Masonry
                     style={{marginLeft : 'auto', marginRight : 'auto'}}
                     columns={
                        section.title.match(/Top Pics/) && numColumns > 2
                        ? 2                   : section.list.length < numColumns
                        ? section.list.length : numColumns
                     }
                     spacing={
                        numColumns > 1 ? 5 : 2
                     }
                  >
                     {section.list.map((item, index) => (
                        <div key={index}
                           style={{
                              borderRadius : '0.2rem',
                              overflow     : 'hidden',
                              border       : '1px solid rgba(190, 190, 190, 1.0)',
                              padding      : 0,
                              boxShadow    : '0px 0px 15px 5px #D2D6C5',
                           }}
                        >
                           <div style={{marginTop : 2}}>
                              {item.replace(/^\/img\/main\/(.+).jpg/, '$1').replace(/([A-Z]+)/g, ' $1').trim()}
                           </div>
                           <a
                              data-fancybox={section.title}
                              href={item}
                              data-caption={item.replace(/^\/img\/main\/(.+).jpg/, '$1').replace(/([A-Z]+)/g, ' $1').trim()}
                              style={{color : 'black', textDecoration : 'none'}}
                           >
                              <AkjImage
                                 item={item}
                                 alt={item.replace(/^\/img\/main\/(.+).jpg/, '$1').replace(/([A-Z]+)/g, ' $1').trim()}
                                 className={styles.imgFluid}
                              />
                           </a>
                        </div>
                     ))}
                  </Masonry>
               </div>
            ))}
         </Fancybox>
         <Footer />
      </Layout>
   );
}
