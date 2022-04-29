import { InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";

export const Title = ({ title }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{open ? (
				<div>
					<InputBase
						value={title}
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
						{title}
					</Typography>
					<MoreHoriz />
				</div>
			)}
		</div>
	);
};
