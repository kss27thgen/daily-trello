import { CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Card } from "../card/Card";
import { InputContainer } from "../input/InputContainer";
import { Title } from "./Title";

export const List = ({ list }) => {
	return (
		<div className="list">
			<Paper className="listPaper">
				<CssBaseline />
				<Title title={list.title} />

				{list.cards.map((card) => (
					<Card key={card.id} card={card} />
				))}

				<InputContainer listId={list.id} />
			</Paper>
		</div>
	);
};
