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
import AboutModal from '../components/AboutModal';
import Footer     from '../components/Footer';

// Constants.
//
import {
   ImageListMain1,
   ImageListMain2,
   ImageListCardiff,
   ImageListNeon,
   ImageListWarm,
   ImageListWorthing,
   ImageListBW,
   ImageListVarious,
} from '../constants';
const sections = [
   {
      title : "",
      list  : ImageListMain1,
   },
   {
      title : "",
      list  : ImageListMain2,
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
   {
      title : "Various",
      list  : ImageListVarious,
   },
];


const calcColumnsH1 = (theWindow) => {
   let thisNumColumns = 4;
   let thisH1FontSize = 65;
   if (theWindow.innerWidth < 576) {
      thisNumColumns = 1;
      thisH1FontSize = 25;
   } else if (theWindow.innerWidth < 767.98) {
      thisNumColumns = 2;
      thisH1FontSize = 35;
   } else if (theWindow.innerWidth < 991.98) {
      thisNumColumns = 3;
      thisH1FontSize = 45;
   } else if (theWindow.innerWidth < 1199.98) {
      thisNumColumns = 4;
      thisH1FontSize = 55;
   }
   return {thisNumColumns, thisH1FontSize};
}

// www.akjcragg.com
//
export default function AKJCragg () {
   const [numColumns, setNumColumns]        = useState(4);
   const [h1FontSize, setH1FontSize]        = useState(65);
   const [showAboutModal,setShowAboutModal] = useState(false);

   const updateSize = () => {
      setNumColumns(calcColumnsH1(window).thisNumColumns);
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
   }
   useEffect(() => {
      setNumColumns(calcColumnsH1(window).thisNumColumns);
      setH1FontSize(calcColumnsH1(window).thisH1FontSize);
      window.onresize = updateSize;
   }, []);


   return (
      <Layout> {/* A Next.js idea */}
         <AboutModal showAboutModal={showAboutModal} setShowAboutModal={setShowAboutModal} />
         <div style={{flexDirection : 'row', display: "flex", justifyContent : 'space-between', alignItems : 'center'}}>
            <h1 style={{textAlign: 'left', fontSize : h1FontSize}}>AKJ Cragg | Lens</h1>
            <Link style={{fontSize : h1FontSize/2, textDecoration: "underline", color : 'unset'}} href="/about">About</Link>
         </div>

         {sections.map((section, sindex) => (
            <div key={sindex}>
               <h2>{section.title}</h2>
               {/* AKJC HERE : Do Quilted : https://mui.com/material-ui/react-image-list/#masonry-image-list */}
               <Masonry columns={section.list.length < numColumns ? section.list.length : numColumns} spacing={5}>
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
                           {item.replace(/^.img.(.+).jpg/, '$1')}
                        </div>
                        <img
                           src={`${item}?w=162&auto=format`}
                           srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                           alt={item}
                           loading="lazy"
                           style={{
                              display: 'block',
                              width: '100%',
                           }}
                        />
                     </div>
                  ))}
               </Masonry>
            </div>
         ))}
         <Footer />
      </Layout>
   );
}
