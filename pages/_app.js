import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Homebanner.css";
import "../styles/Whyus.css";
import "../styles/Howitworks.css";
import "../styles/Aboutus.css";
import "../styles/Customerreviews.css";
import "../styles/Customerbanner.css";
import "../styles/Footer.css";

import "../styles/Login.css";

import '../styles/Category.css'

import "../styles/Items.css"

import '../styles/OrderedItems.css'
import "../styles/BookingDetails.css"

import '../styles/Checkoutbanner.css';
import "../styles/CancelPopup.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>JamBoree</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Cinzel&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </head>

      <Component {...pageProps} />

      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
