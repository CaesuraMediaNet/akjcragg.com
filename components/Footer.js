import Link from 'next/link';
import styles from '../styles/akjcragg.module.css';

export default function Footer () {
   return (
       <footer style={{borderTop:"1px solid black", marginTop : 25}}>
         <p>
            Copyright &copy; AKJ Cragg {new Date().getFullYear()}. All Rights Reserved.
         </p>
         <p>
            <Link style={{textDecoration: "underline", color : 'unset'}} href="/privacypolicy">Privacy Policy</Link>
         </p>
      </footer>
   );
}
