import Link from 'next/link';
import styles from '../styles/akjcragg.module.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Footer () {
   return (
       <footer style={{borderTop:"1px solid black", marginTop : 25}}>
         <p>
            Copyright &copy; AKJ Cragg {new Date().getFullYear()}. All Rights Reserved.
         </p>
         <p>
            <Link style={{textDecoration: "underline", color : 'unset'}} href="/privacypolicy">Privacy Policy</Link>
         </p>
         <div
            onClick={() => window.scrollTo({top:0})}
            style={{position : 'fixed', bottom : 5, right : 2}}>
            <KeyboardDoubleArrowUpIcon color="secondary" sx={{ fontSize: 65 }} />
         </div>
      </footer>
   );
}
