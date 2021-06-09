import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import StyleTile from '../images/wxyc/StyleTile.png';
import Stickers from '../images/wxyc/newsticks.jpg';
import FlyerSummer from '../images/wxyc/flyersummer.jpg';
import FallFest from '../images/wxyc/fallfest11.jpg';
import FallFlyerOption from '../images/wxyc/option.jpg';
import IGStory from '../images/wxyc/ig-Story.png';





class WXYC extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="wxyc page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1}>
                        <h1 className="page-title"> WXYC Freeform Radio Station </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            As the Communications Manager of WXYC, I worked to improve the previously existing channels of communication such as our social media, website, and internal Mailchimp newsletters.
                            Because WXYC is a free-form radio station run entirely by student volunteers, I created a design that closely aligned with the experimental nature of the radio station.
                </p>
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={StyleTile} alt="Flyer" />
                    </Cell>

                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Stickers} alt="Sticker Template" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={FlyerSummer} alt="Summer Flyer" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={FallFest} alt="Fall Fest Print" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={FallFlyerOption} alt="Another Fall Hiring Print" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <p> For this digital ad in paricular, I worked in collaboration with designer Max Brynn to create a detailed spring hiring ad.
                            Inspired by the experimental CD designs within the station, we utilized <a class="external-link" href="https://blkmarket.co/" target="blank">BLK Market's</a> Jewel Case file. </p>
                        <img className="project-image" src={IGStory} alt="Spring Hiring Print" />
                    </Cell>




                </Grid>


            </div >
        )
    }
}
export default WXYC;