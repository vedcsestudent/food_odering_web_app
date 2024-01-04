import React from "react";
import  classes from "./foods.module.css";
import {Link} from "react-router-dom";
import { foodTypes } from "../../data/data";

const Foods=()=>
{
    return (
        <section id="foods" className={classes.container}>
         
         <div className={classes.wrapper}>
            <h4 className={classes.subtitle}> what we offer</h4>

            <h2 className={classes.title}> Best meals in the city</h2>
            <div className={classes.foods}>

            {foodTypes.map((foodtype)=><Link to={`/foods/${foodtype.name}`} key={foodtype.id} className={classes.food}>
                <h4> {foodtype.name}</h4>
                <div className={classes.imgContainer}>
                    <img src={foodtype.img} alt="image"/>

                </div>
            </Link>

            )}

            </div>
         </div>
            
        </section>
    )
}

export default Foods;
