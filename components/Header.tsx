import React, {FunctionComponent} from 'react';
import Link from "next/link";

export interface IHeader {
}

export const Header: FunctionComponent<IHeader> = (props) => {
	return <>
		<Link href={'/'}>Home</Link>
		<Link href={'/about'}>About</Link>
		<Link href={'/contacts'}>Contacts
		</Link>
	</>;
};
