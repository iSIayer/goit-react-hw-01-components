import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';

import Profile from './profile/Profile';
import Statistics from './statiscs/Statistics';
import FriendList from './friends/Friends';
import TransactionHistory from './transactions/Transactions';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
