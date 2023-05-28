import React, { createContext, useState } from 'react';

export const COLOR_CONTEXT = createContext();

const ColorProvider = ({ children }) => {
	const [backgroundColor, setBackgroundColor] = useState('#0d0d0d');
	const [primaryColor, setPrimaryColor] = useState('#0d0d0d');
	const [secondaryColor, setSecondaryColor] = useState('#892c2c');
	const [fontColor, setFontColor] = useState('#FFBC0F');
	const [loginColor, setLoginColor] = useState('#F90000');
	const [fileList, setFileList] = useState([]);

	const value = {
		backgroundColor,
		setBackgroundColor,
		primaryColor,
		setPrimaryColor,
		secondaryColor,
		setSecondaryColor,
		fontColor,
		setFontColor,
		loginColor,
		setLoginColor,
		fileList,
		setFileList,
	};

	return <COLOR_CONTEXT.Provider value={value}>{children}</COLOR_CONTEXT.Provider>;
};

export default ColorProvider;
