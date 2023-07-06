import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Footer from '../components/Footer';


export default function PrivacyPolicy () {
   return (
      <Layout>
         <div style={{flexDirection : 'row', display: "flex", justifyContent : 'space-between', alignItems : 'center'}}>
            <h1 style={{textAlign: 'left', fontSize : 25}}>AKJ Cragg | Lens | Privacy Policy</h1>
            <Link style={{fontSize : 16, textDecoration: "underline", color : 'unset'}} href="/">Home</Link>
         </div>
         <iframe
            style={{border : 0}}
            src="/PrivacyPolicyHTML.html"
            width="100%"
            height="10000"
            loading="lazy"
            scrolling="yes"
         >
         </iframe>
         <Footer />
      </Layout>
   );
}
