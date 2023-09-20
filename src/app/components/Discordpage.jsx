"use client"

import React from 'react'
import  {  ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    safeWallet,
    localWallet,
    paperWallet,  } from "@thirdweb-dev/react";
import styles from "../styles/discordpage.module.css";
import progressbar from '../../../public/assets/images/Group 33118.png'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useSession, signOut, signIn } from "next-auth/react"

function Discordpage() {
  return (
 


      <div className= {styles.main}>
        <div className={styles.top}>
        <p className={styles.top_title}> Link your web3 wallet</p>
        <p className={styles.top_desc}>link your web3 wallet by clicking the button below</p>
        <Image src={progressbar} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.discord}>
            <p className={styles.discord_p}>discord</p>
            <button className={styles.discord_btn} onClick={() => signIn("discord")}disabled={false}>link</button>
          </div>
          
        </div>
      </div>


  
 

  )
}

export default Discordpage