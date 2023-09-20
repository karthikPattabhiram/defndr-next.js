"use client"
import React, { Suspense, useEffect, useState } from "react";
import { ConnectWallet, useAddress, ThirdwebProvider, useAuth, useMetamask, useLogout  } from "@thirdweb-dev/react";
import styles from "../styles/confirmationpage.module.css";
import progressbar from "../../../public/assets/images/Group 33117.png";
import Image from "next/image";
import Loading from "../loading";
import { useSession, signOut, signIn } from "next-auth/react";
import gradient from "../../../public/assets/images/gradient.png";
import infoIcon from "../../../public/assets/images/information-circle-contained.png";



function Confirmationpage() {
  const address = useAddress()
  const auth = useAuth();

  function formatEthereumAddress(address) {
    if (address === "undefined") return address
    else {
      // const prefix = address.slice(0, 4);
      // const suffix = address.slice(-4);
  
      // return `${prefix}...${suffix}`;
      console.log( "adress", address )
    }
   
  }
const [success, setSuccess] = useState(false)
const [payload, setPayload] = useState("")

 console.log(address)
  const formattedAddress = formatEthereumAddress(address);

  async function loginWithWallet() {
    // // Prompt the user to sign a login with wallet message
    // const payload = await auth?.login();

    // // Then send the payload to next auth as login credentials
    // console.log(payload)

    // setSuccess(true)
    // setPayload(payload)
    console.log("ok")
   
  }

  const { data: session } = useSession()

  
  if (success === false) {
    if (!session) {
      return (
        <>
        <main>
  
        <p>You are not signed in</p>
        
        <button onClick={() => signIn("discord")}> 
          Sign in with Discord
        </button>
        
  
        </main>
          
        </>
      )
    }
    
  return (
    
    <div className={styles.main}>
      <div className={styles.top}>
        <p className={styles.top_title}> Confirm your account</p>
        <p className={styles.top_desc}>confirm to link your wallet to discord account</p>
        <Image src={progressbar} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.b_top}>
          <img src={session.user.image} alt="discord-profile" className={styles.discord_profile} width="92" height="92" />
          <Image src={gradient} alt="wallet-profile" className={styles.web3_profile} width="92" height="92" />
        </div>

        <p className={styles.confirmation_text}>do you want connect your {formattedAddress} wallet to your discord account? </p>
        <div className={styles.b_mid}>
          <button className={styles.link_btn} onClick={() => loginWithWallet()}>link</button>
          <button className={styles.cancel_btn}>cancel</button>
        </div>
        <div className={styles.b_bottom}>
          <svg class="information-circle-contained" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.00005 8.9998L9.00005 12.5998M9.00005 6.33145V6.2998M1.80005 8.9998C1.80005 5.02335 5.0236 1.7998 9.00005 1.7998C12.9765 1.79981 16.2 5.02336 16.2 8.99981C16.2 12.9763 12.9765 16.1998 9.00005 16.1998C5.0236 16.1998 1.80005 12.9763 1.80005 8.9998Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
           <p>by clicking “link”, you agree to accept our TOS</p> 
       
     
        </div>
      </div>
    </div>
  );

  } else if (success === true ) {
    return (
      <> 
      <p>{payload}</p>
      </>

    )
  }

}

export default Confirmationpage;
