import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const CaseStudyHeader = (props) => {
    let sectionStyle = {
        backgroundColor: "#"+props.fields.bgColor.value,
    };
    let imageStyle = {
        backgroundImage: 'url('+props.fields.bgImage.value+')',
    }

    return (
    <section className={`home-feature ${props.fields.bgColor.value}`}>
			<header className="component case-study-header faded cbeebies slide minimal lowdown-initialised component-initialised undefined">
                <Link className="link" field={props.fields.link}>
                </Link>
                <div className="hgroup">
                    <h1>
                        <Text field={props.fields.title1} />
                        <br></br>
                        <Text field={props.fields.title2} />
                    </h1>
                </div>
				<div className="bg" style={imageStyle}></div>
				<p className="subtext-cta">
                    {props.fields.link.value.text}
                </p>
				<div className="bg-color"></div>
			</header>
	</section>
    );
};

export default CaseStudyHeader;
