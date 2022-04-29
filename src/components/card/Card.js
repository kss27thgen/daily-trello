import { Paper } from "@mui/material";
import React from "react";

export const Card = ({ card }) => {
	return <Paper className="card">{card.title}</Paper>;
};
