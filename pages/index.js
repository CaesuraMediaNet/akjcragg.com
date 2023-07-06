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
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

// Local components.
//
import Footer            from '../components/Footer';
import useProgressiveImg from '../components/useProgressiveImg';

// Local functions.
//
import calcColumnsH1 from '../functions/calcColumnsH1';

// Constants.
//
import {
   ImageListMain1,
   ImageListCardiff,
   ImageListNeon,
   ImageListWarm,
   ImageListWorthing,
   ImageListBW,
   ImageListVarious,
} from '../constants';
const sections = [
   {
      title : "ImageListMain1",
      list  : ImageListMain1,
   },
   {
      title : "National Museum Cardiff",
      list  : ImageListCardiff,
   },
   {
      title : "Various",
      list  : ImageListVarious,
   },
   {
      title : "Neon",
      list  : ImageListNeon,
   },
   {
      title : "B/W",
      list  : ImageListBW,
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
      const [src, { blur }] = useProgressiveImg(item.replace(/img/, 'img/blur'), item);
      return (
         <img
            src={`${src}?w=162&auto=format`}
            srcSet={`${src}?w=162&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
            style={{
               display: 'block',
               width: '100%',
               filter: blur ? "blur(20px)" : "none",
               transition: blur ? "none" : "filter 0.3s ease-out"
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
         {sections.map((section, sindex) => (
            <div key={sindex}>
               <h2>{section.title === "ImageListMain1" ? "" : section.title}</h2>
               <Masonry
                  columns={
                     section.title.match(/ImageListMain1|Various/)
                     ? 3                   : section.list.length < numColumns
                     ? section.list.length : numColumns
                  }
                  spacing={5}
               >
                  {section.list.map((item, index) => (
                     <div key={index}
                        style={{
                           borderRadius : '0.2rem',
                           overflow     : 'hidden',
                           border       : '1px solid rgba(0, 0, 0, 1.0)',
                           padding      : 5,
                           boxShadow    : '0px 0px 15px 5px #D2D6C5',
                        }}
                     >
                        <div>
                           {item.replace(/^.img.(.+).jpg/, '$1').replace(/([A-Z]+)/g, ' $1').trim()}
                        </div>
                        <AkjImage item={item} />
                     </div>
                  ))}
               </Masonry>
            </div>
         ))}
         <Footer />
      </Layout>
   );
}
