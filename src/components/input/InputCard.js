import { Clear } from "@mui/icons-material";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";

export const InputCard = ({ setOpen }) => {
	return (
		<div>
			<div className="addCardInputContainer">
				<Paper>
					<InputBase
						multiline
						fullWidth
						onBlur={() => setOpen(false)}
						placeholder="Enter a Card Title"
						inputProps={{ className: "addCardInput" }}
					/>
				</Paper>
			</div>
			<div>
				<Button
					className="addCardConfirmButton"
					onClick={() => setOpen(false)}
				>
					Add Card
				</Button>
				<IconButton onClick={() => setOpen(false)}>
					<Clear />
				</IconButton>
			</div>
		</div>
	);
};
