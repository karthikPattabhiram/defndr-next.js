import React, { Suspense, useEffect, useState } from "react";
import { ConnectWallet, useAddress, ThirdwebProvider } from "@thirdweb-dev/react";
import styles from "../styles/connectwallet.module.css";
import progressbar from "../../../public/assets/images/Group33116.png";
import Image from "next/image";
import Loading from "../loading";
import Confirmationpage from "./Confirmationpage";

function Connectwalletpage() {
  const address = useAddress();
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (address) {
       setIsConnected(true)
       console.log(address)
    }
    else {
      setIsConnected(false)
      console.log("amogus sus disconnected")
        }
  }, [address]);

  if (isConnected === true ) {
    return <Confirmationpage />;

  } else {
    return (
    
      <ThirdwebProvider activeChain="ethereum" clientId="7363129d03b0ff037ebe266f4c74e4eb">
        <div className={styles.main}>
          <div className={styles.top}>
            <p className={styles.top_title}> Link your web3 wallet</p>
            <p className={styles.top_desc}>link your web3 wallet by clicking the button below</p>
            <Image src={progressbar} />
          </div>
          <div className={styles.bottom}>
            <div className={styles.discord}>
              <p className={styles.discord_p}>discord</p>
              <button className={styles.discord_btn} disabled={true}>
                linked
              </button>
            </div>
            <div className={styles.web3}>
              <p className={styles.web3_p}>web3 wallet</p>
              <ConnectWallet theme="dark" btnTitle="link" className={styles.connect_btn} />
            </div>
          </div>
        </div>
      </ThirdwebProvider>
    );

  }
 
}

export default Connectwalletpage;
