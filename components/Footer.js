import Link from 'next/link';
import styles from '../styles/akjcragg.module.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const iconWidth = 45;

export default function Footer () {
   return (
       <footer style={{borderTop:"1px solid black", marginTop : 25}}>
         <p>
            Copyright &copy; AKJ Cragg {new Date().getFullYear()}. All Rights Reserved.
         </p>
         <p>
            <Link style={{textDecoration: "underline", color : 'unset'}} href="/privacypolicy">Privacy Policy</Link>
         </p>
         <div style={{
            borderTop      : "1px solid black",
            marginLeft     : '20vw',
            marginRight    : '20vw',
            flexDirection  : 'row',
            display        : "flex",
            justifyContent : 'space-around',
            alignItems     : 'center'}}
         >
            <a href="https://chintzbaby.com" target="_blank">
               <img src="/img/chintzbaby-cat.png" width={iconWidth} />
            </a>
            <a href="https://andycragg.com/art" target="_blank">
               <img src="/img/acart-logo.png" width={iconWidth} />
            </a>
            <a href="https://andycragg.com" target="_blank">
               <img src="/img/akjc-logo.png" width={iconWidth} />
            </a>
            <a href="https://andykjcragg.co.uk" target="_blank">
               <img src="/img/andykjcragg-logo-large.png" width={iconWidth} />
            </a>
            <a href="https://scrembl.com" target="_blank">
               <img src="/img/scremblv2-icon.png" width={iconWidth} />
            </a>
            <a href="https://memtyles.com" target="_blank">
               <img src="/img/memtyles-logo.svg" width={iconWidth} />
            </a>
         </div>
         <div
            onClick={() => window.scrollTo({top:0, behavior : 'smooth'})}
            style={{position : 'fixed', bottom : 5, right : 2}}>
            <KeyboardDoubleArrowUpIcon color="secondary" sx={{ fontSize: iconWidth }} />
         </div>
      </footer>
   );
}
