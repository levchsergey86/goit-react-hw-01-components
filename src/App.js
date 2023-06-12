import React from "react";
import { Card } from "./components/Card/Card";
import { Statistics } from "./components/Statistics/Statistics";
import { Friends } from "./components/Friends/Friends";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
