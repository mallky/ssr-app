import React, {FunctionComponent} from 'react';
import {Header} from "../../components/Header";

export interface IAbout {
}

const About: FunctionComponent<IAbout> = (props) => {
	return <>
		<Header />
		<div>text</div>
	</>;
};

export default About;
