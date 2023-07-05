// Next.js
//
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/akjcragg.module.css';
import Layout, { siteTitle } from '../components/layout';

// React.js
//
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// External React Libraries.
//
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import BsCard from 'react-bootstrap/Card';
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


const calcColumns = (theWindow) => {
   let thisNumColumns = 5;
   if (theWindow.innerWidth < 576) {
      thisNumColumns = 1;
   } else if (theWindow.innerWidth < 767.98) {
      thisNumColumns = 2;
   } else if (theWindow.innerWidth < 991.98) {
      thisNumColumns = 3;
   } else if (theWindow.innerWidth < 1199.98) {
      thisNumColumns = 4;
   }
   return thisNumColumns;
}

// www.akjcragg.com
//
export default function AKJCragg () {
   const [numColumns, setNumColumns] = useState (5);

   const updateSize = () => {
      setNumColumns(calcColumns(window));
   }
   useEffect(() => {
      setNumColumns(calcColumns(window));
      window.onresize = updateSize;
   }, []);


   return (
      <Layout> {/* A Next.js idea */}
         <Container fluid> 
            <div>
               <h1 style={{textAlign: 'left', fontSize : 60}}>AKJ Cragg | Lens</h1>
            </div>
            {sections.map((section, sindex) => (
               <div key={sindex}>
                  <h2>{section.title}</h2>
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
         </Container>
      </Layout>
   );
}
