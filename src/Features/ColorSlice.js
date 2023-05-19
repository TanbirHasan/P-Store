import { createSlice } from '@reduxjs/toolkit';

const ColorSlice = createSlice({
	name: 'color',
	initialState: {
		backgroundColor: '#FFBC0F',
		primaryColor: '#0d0d0d',
		secondaryColor: '#892c2c',
		fontColor: '#FFBC0F',
		loginColor: '#F90000',
		fileList: [],
	},
});
