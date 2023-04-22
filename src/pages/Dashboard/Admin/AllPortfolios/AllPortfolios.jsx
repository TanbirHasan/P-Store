import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AllPortfolios = ({ setShowAllPortfolios }) => {
	const [names, setNames] = useState('');
	return (
		<div>
			{/* Header part */}
			<div className="flex items-center justify-between">
				<div>
					<ArrowBackIcon
						onClick={() => {
							setShowAllPortfolios(false);
							localStorage.removeItem('ShowAllPortfolio');
						}}
						style={{ cursor: 'pointer', fontSize: 30 }}
					/>
				</div>
				<div className="lg:w-[300px]">
					<FormControl sx={{ width: '300px' }}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={names}
							displayEmpty
							className="custom-input"
							sx={{ textAlign: 'left' }}
							onChange={(event) => setNames(event.target.value)}>
							<MenuItem value="">Tanbir</MenuItem>
							<MenuItem value={'sajid'}>Sajid</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			<hr className="mt-8 mb-10 bg-[#D9D9D9]" />
		</div>
	);
};

export default AllPortfolios;
