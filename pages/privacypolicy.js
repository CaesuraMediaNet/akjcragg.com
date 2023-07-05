import Container from 'react-bootstrap/Container';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function PrivacyPolicy () {
   return (
      <Layout>
         <Container fluid>
            <p style={{float : 'right'}}>
               <Link style={{textDecoration: "none", color : 'unset'}} href="/">Home</Link>
            </p>

            <h1 style={{textAlign: 'left', fontSize : 25, marginBottom : 25}}>AKJ Cragg | Lens | Privacy Policy</h1>
            <iframe
               style={{border : 0}}
               src="/PrivacyPolicyHTML.html"
               width="90%"
               height="10000"
               loading="lazy"
               scrolling="yes"
            >
            </iframe>
         </Container>
      </Layout>
   );
}
