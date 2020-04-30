import React from 'react';
import st from './News.module.css';

const News = () => {
    return (
        <div className={st.newsBlock}>
            <h1>My coast</h1>
            <div>
                <div className={st.partOne}>
                    <p><b>A</b>nd so I have lost you, oh you were my coast</p>
                    <p>And now I'm sleeping on hugging this hope</p>
                    <p>To live through to June</p>
                    <p>You were my land, my home</p>
                </div>
                <div className={st.partTwo}>
                    <p>Where I was living under the sky-dome</p>
                    <p>I did not love alone, 'cause she also loved, and he was in love</p>
                    <p>Right behind the sunglasses I wear</p>
                    <p>Summer's still breathing</p>
                </div>
                <div className={st.partThree}>
                    <p>And let the sky be covered in clouds somewhere</p>
                    <p>We'll wait till the warmer breezes</p>
                    <p>I've now learnt to be bored, oh you were my coast</p>
                    <p>There's nothing left to drink</p>
                </div>
                <div className={st.partFour}>
                    <p>There're no warm clothes</p>
                    <p>It's hard to make us give up believing we're happy</p>
                    <p>Because you see here we are, with all the sunshine</p>
                    <p>And all the friendship</p>
                </div>
                <div className={st.partFive}>
                    <p>Right behind the sunglasses I wear</p>
                    <p>Summer's still breathing</p>
                    <p>And let the sky be covered in clouds somewhere</p>
                    <p>We'll wait till the warmer breezes</p>
                </div>
            </div>
        </div>
    );
}

export default News;