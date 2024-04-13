import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import Page from './styledComponents/page';
import Container from './styledComponents/container';
import Up from './styledComponents/up';
export const App = () => {
  return (
    <Page className="Container">
      <Up>
        <Container className="profileContainer">
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
        <Container className="mainContainer">
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends}></FriendList>
        </Container>
      </Up>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </Page>
  );
};
