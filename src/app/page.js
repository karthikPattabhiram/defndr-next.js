"use client";

import Image from 'next/image'
import { useSession, signOut, signIn } from "next-auth/react"
import styles from "./styles/globals.css"
import { Wobble } from '@uiball/loaders'
import { ConnectWallet } from '@thirdweb-dev/react';

export default function Home() {
  const { data: session } = useSession()

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
 const handleButton = () => {
  signOut()
  console.log(session.user)
 }
  return (
    <>
    <h1>Dashboard</h1>
    <Image src={session.user.image} alt='oksus'  width="100" height="100" className='image'/>
      <p>Signed in as {session.user.image}, {session.user.email}, {session.user.name},  </p>
      <button onClick={handleButton}>Sign out</button>
      <ConnectWallet
              theme="dark"
              btnTitle="link"
              className={styles.connect_btn}
            />
 
        <div className={styles.loader}>  
          <Wobble 
    size={45}
    speed={0.9} 
    color="white" 
    />
    </div>


    </>
    
   
  )
}
