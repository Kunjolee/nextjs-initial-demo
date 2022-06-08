import '../styles/globals.css'
// All the components of my app will pass through here
function MyApp({ Component, pageProps }) {  
  
  
  const getLayout = Component.getLayout || (( page ) => page);

  return getLayout(<Component {...pageProps} />)    
}

export default MyApp
