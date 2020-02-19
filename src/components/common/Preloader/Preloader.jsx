import React from 'react';
import preloaderImg from '../../../assets/preloader.svg'
import st from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={st.preloaderPict}>
            <img src={preloaderImg} alt='pict'/>
        </div>
    )
}

export default Preloader;