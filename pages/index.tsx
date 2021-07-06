import dynamic from 'next/dynamic'
import { NextPage } from 'next/types';
import Login from '../FrontEnd/components/Login/index';
const HomePage: NextPage = () => {
	return (		
			<Login/>
	);
}

export default HomePage;
