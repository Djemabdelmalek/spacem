module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
        color1: '#0B0D17' ,
        color2: '#D0D6F9' ,
        color3: '#FFFFFF'
       },
       fontSize: {
         head1 : '150px',
         head2 : '100px',
         head3 : '56px',
         head4 : '32px',
         head5 : '28px',
         subhead1: '28px',
         subhead2: '14px',
         subhead3: '16px',

       },
       letterSpacing: {
        spacing1 : '4.75px',
        spacing2 : '2.35px',
        spacing3 : '2.7px',
       },
       boxShadow: {
         btn : '0px 0px 2px 40px rgba(255,255,255,0.5);',
       },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }