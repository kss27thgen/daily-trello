import { Collapse, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { InputCard } from "./InputCard";

export const InputContainer = ({ listId }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="addCard">
			<Collapse in={open}>
				<InputCard setOpen={setOpen} listId={listId} />
			</Collapse>
			<Collapse in={!open}>
				<Paper
					className="addCardContainer"
					elevation={0}
					onClick={() => setOpen(!open)}
				>
					<Typography>+ Add a Card</Typography>
				</Paper>
			</Collapse>
		</div>
	);
};
