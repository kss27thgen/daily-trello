import { useState } from "react";
import "./App.sass";
import { List } from "./components/list/List";
import { v4 as uuid } from "uuid";
import StoreApi from "./utils/storeApi";
import store from "./utils/store";

function App() {
	const [data, setData] = useState(store);
	const addMoreCard = (title, listId) => {
		const newCardId = uuid();
		const newCard = {
			id: newCardId,
			title,
		};
		const list = data.lists[listId];
		list.cards = [...list.cards, newCard];

		const newState = {
			...data,
			lists: {
				...data.lists,
				listId: list,
			},
		};
		setData(newState);
	};

	return (
		<StoreApi.Provider value={{ addMoreCard }}>
			<div className="app">
				{data.listIds.map((listId) => {
					const list = data.lists[listId];
					return <List list={list} key={listId} />;
				})}
			</div>
		</StoreApi.Provider>
	);
}

export default App;
