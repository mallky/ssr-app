import React, {FunctionComponent} from 'react';
import {Header} from "../components/Header";

export interface IContacts {
}

const Contacts: FunctionComponent<IContacts> = (props) => {
	return <>
		<Header/>
		<div>contacts</div>
	</>;
};

export default Contacts;
