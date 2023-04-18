import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

const DeactivateUserConfirmation = ({ open, setUserStatus, setOpenConfirmationModal }) => {
	return (
		<Dialog
			open={open}
			maxWidth={'lg'}
			onClose={() => setOpenConfirmationModal(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<div className="flex justify-between items-center">
				<DialogTitle id="alert-dialog-title">Deactivate User</DialogTitle>
				<DialogTitle id="alert-dialog-title">
					<button onClick={() => setOpenConfirmationModal(false)}>
						<ClearOutlinedIcon />
					</button>
				</DialogTitle>
			</div>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Are you sure you want to deactivate user?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<button
					onClick={() => {
						setUserStatus('deactivated');
						setOpenConfirmationModal(false);
					}}
					className="w-[120px] h-[30px] bg-[#FFBC0F] rounded-[5px] font-bold my-4 mr-4">
					Confirm
				</button>
			</DialogActions>
		</Dialog>
	);
};

export default DeactivateUserConfirmation;
