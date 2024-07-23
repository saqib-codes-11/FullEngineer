import React from "react";
import ContentBlock from "../main/ContentBlock";
import ContentContainer from "../main/ContentContainer";
import Divider from "../main/Divider";
import ColumnBlock from "../main/ColumnBlock";
import Splash from "../main/Splash";
import ContentContainerColumn from "../main/ContentContainerColumn";
import {data} from "./Data";

function Home(){

    return (
        <div className="home page-wrapper">
            <Splash content={data.home.tagline}/>
            <ContentContainer content={
                <>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                </>
            }/>
            <ContentContainer content={
                <>
                    <ContentBlock/>
                    <ContentBlock/>
                </>
            }/>


            <Divider/>
            <ContentContainerColumn content={
                <>
                    <ColumnBlock/>
                    <ColumnBlock/>
                </>
            }/>





        </div>
    )
}

export default Home;