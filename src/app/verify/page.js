"use client";
import Discordpage from "../components/Discordpage";
import { useSession, signOut, signIn } from "next-auth/react";

import styles from "../styles/connectwallet.module.css";
import Connectwalletpage from "../components/Connectwalletpage";
import { useSearchParams } from 'next/navigation'
import { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import Confirmationpage from "../components/Confirmationpage";

export default function Dashboard() {
  const { data: session } = useSession();
  const sessionParams = useSearchParams()
 
  const sessionToken = sessionParams.getAll('sessionToken')[0]
  const address = useAddress()
  console.log(sessionToken, "session")
  console.log(address)
  
     
  if (!session) {
    return (
      <>
        <Discordpage />
      </>
    );
  } else {
        if (address === undefined) {
          return(
            <>
            <Connectwalletpage />
          </>
          )
        } else { 
          
          return(<>
            <Confirmationpage/>
          </>)
          
        }
     
    
  }
}
