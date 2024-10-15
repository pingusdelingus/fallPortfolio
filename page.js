'use client';
import { useEffect } from "react";
import style from './sty.css';


export default function Home(){


    useEffect( () => {

        
        async() => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();

        }
    })




}