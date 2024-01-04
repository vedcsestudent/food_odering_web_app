import React from "react";
import classes from "./hero.module.css";
import {AiOutlineArrowDown} from "react-icons/ai";
import manEating from "../../assets/man-having-his-meal.svg";
const Hero=()=>
{
    return (<section style={{height:"160vh"}} id="home" className={classes.container}>
    <div className={classes.wrapper}>

        <div className={classes.left}>
            <h2 className={classes.htitle}>Do you crave delicious food</h2>

            <p className={classes.firstMsg}> But going out to take <span> food costs time...</span></p>
            <p className={classes.secondMsg}>
                Why not order <span> pizza
                or something <br/>
                 delicious</span> from our restaurant
            </p>

            <p className={classes.desc}>
                Our restaurant always puts the client above. They  are our single most important thing for our buisness.
            </p>

            <div className={classes.buttons}>
                <button className={classes.buttonOrder}> Order now!</button>
                
                <button className={classes.buttonSee}> <a href="# foods">See what's available <AiOutlineArrowDown></AiOutlineArrowDown></a></button>
            </div>


        </div>
        <div className={classes.right}>

        <img src={manEating} alt="image of man eating"  className={classes.manEatingImg}/>

        </div>
    </div>

    </section>)
}

export default Hero;
