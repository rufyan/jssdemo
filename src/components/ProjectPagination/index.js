import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ProjectPagination = (props) => {
    let imageStyle = {
        backgroundImage: 'url('+props.fields.bgImage.value+')',
    }

    return (
        <section className="next-project">
            <header className={`component case-study-header faded thin ${props.fields.class.value}`} data-preload-on="" data-class-in-up="fade-in visible" data-publish-mouseover="caseStudy.bbc.header.in" data-publish-mouseout="caseStudy.bbc.header.out" data-script="components/case-studies/bbc/header" data-middle="true">
                <Link className="link" field={props.fields.link}></Link>
                <div className="bg" style={imageStyle}></div>
                <p className="subtext-cta"></p>
                <div className="hgroup">
                    <Text field={props.fields.heading} tag="h1"></Text>
                </div>
                <div className="bg-color"></div>
            </header>
        </section>
    );
}

export default ProjectPagination;