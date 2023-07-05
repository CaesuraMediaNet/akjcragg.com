import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { League_Spartan } from 'next/font/google';
const akjcraggFont = League_Spartan({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


const style = {
  position  : 'absolute',
  top       : '50%',
  left      : '50%',
  transform : 'translate(-50%, -50%)',
  width     : '75%',
  bgcolor   : 'background.paper',
  border    : '2px solid #ffffff',
  p         : 4,
  boxShadow    : '0px 0px 15px 5px #ffffff',
};

export default function AboutModal({ showAboutModal,setShowAboutModal }) {
   return (
      <Modal
         open={showAboutModal}
         onClose={() => setShowAboutModal(false)}
         className={akjcraggFont.className}
      >
         <Box sx={style}>
            <h3>AKJ Cragg | Lens | About</h3>
            <p>
               I like to work with digital photographs in a minimal way, without using
               special effects, just using changes in colour and perspective to create
               new images.
            </p>
            <p>
               On this site you will see a few of my photographs mainly depicting everyday, common things
               that usually go unnoticed.
            </p>
            <p>
               I hope you like them!
            </p>
            <p>
               Contact me on andyc [ at ] akjcragg [ dot] com for prints.
            </p>
            <Button
               color="secondary"
               size="medium"
               variant="outlined"
               onClick={() => setShowAboutModal(false)}
            >
               Got it!
            </Button>
         </Box>
      </Modal>
   );
}
