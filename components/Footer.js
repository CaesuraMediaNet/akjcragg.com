import Link                      from 'next/link';
import styles                    from '../styles/akjcragg.module.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Grid                      from '@mui/material/Unstable_Grid2';

const iconWidth = 25;
const aStyles = {
   color          : 'unset',
   textDecoration : 'underline',
};

export default function Footer () {
   return (
       <footer style={{borderTop:"1px solid black", marginTop : 25}}>
         <p>
            Copyright &copy; AKJ Cragg {new Date().getFullYear()}. All Rights Reserved.
         </p>
         <p>
            <Link style={{textDecoration: "underline", color : 'unset'}} href="/privacypolicy">Privacy Policy</Link>
         </p>
         <p style={{width : '100%',borderTop : "1px solid black"}}></p>
         <p  style={{fontSize : 16}}>My other sites</p>
         <Grid container spacing={2}>
            <Grid md={2}>
               <a style={aStyles} href="https://chintzbaby.com" target="_blank">
                  <img src="/img/chintzbaby-cat.png" width={iconWidth} />
                  &nbsp;ChintzBaby
               </a>
            </Grid>
            <Grid  md={2}>
               <a style={aStyles} href="https://andycragg.com/art" target="_blank">
                  <img src="/img/acart-logo.png" width={iconWidth} />
                  &nbsp;Art
               </a>
            </Grid>
            <Grid md={2}>
               <a style={aStyles} href="https://andycragg.com" target="_blank">
                  <img src="/img/akjc-logo.png" width={iconWidth} />
                  &nbsp;All sites
               </a>
            </Grid>
            <Grid md={2}>
               <a style={aStyles} href="https://andykjcragg.co.uk" target="_blank">
                  <img src="/img/andykjcragg-logo-large.png" width={iconWidth} />
                  &nbsp;Stories
               </a>
            </Grid>
            <Grid md={2}>
               <a style={aStyles} href="https://scrembl.com" target="_blank">
                  <img src="/img/scremblv2-icon.png" width={iconWidth} />
                  &nbsp;Message Obfustication
               </a>
            </Grid>
            <Grid md={2}>
               <a style={aStyles} href="https://memtyles.com" target="_blank">
                  <img src="/img/memtyles-logo.svg" width={iconWidth} />
                  &nbsp;Memory Game
               </a>
            </Grid>
         </Grid>
         <div
            onClick={() => window.scrollTo({top:0, behavior : 'smooth'})}
            style={{position : 'fixed', bottom : 5, right : 2}}>
            <KeyboardDoubleArrowUpIcon color="secondary" sx={{ fontSize: 45 }} />
         </div>
      </footer>
   );
}
