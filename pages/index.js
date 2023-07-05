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
import {ImageList} from '../constants';


export default function AKJCragg () {
   return (
      <Layout> {/* A Next.js idea */}
         <Container fluid> 
            <h1>AKJ Cragg</h1>
            <Masonry columns={4} spacing={5}>
               {ImageList.map((item, index) => (
                  <div key={index}
                     style={{
                        borderRadius: '0.2rem',
                        overflow:'hidden',
                        border: '1px solid rgba(0, 0, 0, 1.0)',
                        padding:5,
                        boxShadow: '0px 0px 15px 5px #D2D6C5',
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
         </Container>
      </Layout>
   );
}
