import { CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Card } from "../card/Card";
import { InputContainer } from "../input/InputContainer";
import { Title } from "./Title";

export const List = () => {
	return (
		<div className="list">
			<Paper className="listPaper">
				<CssBaseline />
				<Title />

				<Card />
				<Card />
				<Card />
				<Card />

				<InputContainer />
			</Paper>
		</div>
	);
};
