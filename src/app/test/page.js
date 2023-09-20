"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useAuth, useAddress, useMetamask, useLogout, useSDK } from "@thirdweb-dev/react";
import { useState } from "react";
import Confirmationpage from "../components/confirmationpage";
export default function Home() {
  const address = useAddress();
  const connect = useMetamask();
  const auth = useAuth();
  const { data: session } = useSession();
  const sdk = useSDK()
 const isLoggedIn = useState(false)
 const { logout, isLoading } = useLogout();
   
  async function loginWithWallet() {
    // // Prompt the user to sign a login with wallet message
    const payload = await auth?.login();
    // const signa = await sdk?.wallet.sign("test ok ok")
  }

  return (
    
    
     <>
     <div>
  
     <button onClick={() => loginWithWallet()}>Login</button>
    

     <pre>Connected Wallet: {address}</pre>
    
    </div>
    </>


    
  );
}