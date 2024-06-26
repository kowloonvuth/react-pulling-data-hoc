import React from 'react';
import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-profile/user-list.component';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile name='unknown' email='unknown@email.com' dataSource="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default App;
