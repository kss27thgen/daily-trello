import { Clear } from "@mui/icons-material";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";

export const InputCard = ({ setOpen, listId }) => {
	const { addMoreCard } = useContext(storeApi);
	const [cardTitle, setCardTitle] = useState("");

	const handleOnChange = (e) => {
		setCardTitle(e.target.value);
	};

	const handleBtnConfirm = () => {
		addMoreCard(cardTitle, listId);
		setCardTitle("");
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
		setCardTitle("");
	};

	return (
		<div>
			<div className="addCardInputContainer">
				<Paper>
					<InputBase
						onChange={handleOnChange}
						multiline
						fullWidth
						value={cardTitle}
						onBlur={() => setOpen(false)}
						placeholder="Enter a Card Title"
						inputProps={{ className: "addCardInput" }}
					/>
				</Paper>
			</div>
			<div>
				<Button
					className="addCardConfirmButton"
					onClick={handleBtnConfirm}
				>
					Add Card
				</Button>
				<IconButton onClick={handleClose}>
					<Clear />
				</IconButton>
			</div>
		</div>
	);
};
