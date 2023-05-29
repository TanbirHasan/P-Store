import React from 'react';
import { FadeLoader } from 'react-spinners';

const FadeLoaderSpinner = ({color}) => {
	return (
		<>
			<FadeLoader color={color} />
		</>
	);
};

export default FadeLoaderSpinner;
