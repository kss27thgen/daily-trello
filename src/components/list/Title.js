import { InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";

export const Title = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{open ? (
				<div>
					<InputBase
						value="Todo"
						autoFocus
						fullWidth
						inputProps={{ className: "listInput" }}
						onBlur={() => setOpen(!open)}
					/>
				</div>
			) : (
				<div className="listTitleWrapper">
					<Typography
						className="listTitle"
						onClick={() => setOpen(!open)}
					>
						Todo
					</Typography>
					<MoreHoriz />
				</div>
			)}
		</div>
	);
};
