import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Headshot from './images/newheadshot.jpg'

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {


        return (
            <div className="about-page page">
                <Grid className="side-page-content" style={{ width: '90vw' }}>
                    <Cell col={10} offset={1}>
                        <h1 className="page-title"> About Me </h1>
                    </Cell>
                    <Cell col={6} tablet={6} phone={12} >
                        <div>
                            <img src={Headshot}
                                alt="avatar"
                                className="avatar-image project-image"

                            />
                        </div>
                    </Cell>
                    <Cell className=" animated fadeInUp " col={6} tablet={6} phone={12} >
                        <div>
                            <p> I am a multidisciplinary designer skilled in building innovate digital experiences.
                            I have worked with various companies such as
                        <a className="normalLinks" href="https://www.med.unc.edu/" target="_blank" rel="noopener noreferrer"> UNC School of Medicine</a>,
                        <a className="normalLinks" href="https://artsorange.org/" target="_blank" rel="noopener noreferrer"> Orange County Arts Commission</a>, and
                        <a className="normalLinks" href="https://panopli.co/" target="_blank" rel="noopener noreferrer"> Panopli </a>
                        to engage audiences via motion graphics, data visualization, and design.
                         </p>

                            <p>
                                I am an alumna of the UNC Hussman School of Journalism and Media.
                    </p>
                        </div>

                    </Cell>

                </Grid>


            </div >

        )
    }
}
export default About;