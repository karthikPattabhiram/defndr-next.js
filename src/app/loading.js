"use client";

import Image from 'next/image'
import { Wobble } from '@uiball/loaders'
import styles from './styles/globals.css'



export default function Loading() {
 
   return (
    <> 
    <div className={styles.loader}>    <Wobble 
 size={45}
 speed={0.9} 
 color="white" 
/>
 </div>


</>
   )
}
