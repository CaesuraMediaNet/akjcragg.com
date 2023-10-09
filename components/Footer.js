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
         <hr />
         <iframe
            style={{border:"unset", height:"100vw", width:"100vw"}}
            src="https://caesuramedia.com/ads"
            loading="lazy"
            width="100%"
            height="100%"
            title="Adverts by me"
         ></iframe>
         <div
            onClick={() => window.scrollTo({top:0, behavior : 'smooth'})}
            style={{position : 'fixed', bottom : 5, right : 0}}>
            <KeyboardDoubleArrowUpIcon color="secondary" sx={{ fontSize: 45 }} />
         </div>
      </footer>
   );
}
