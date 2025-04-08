import React from 'react';
import Banner from '../components/Banner';
import ListingsContainer from '../containers/ListingsContainer';
import JobNotification from '../components/JobNotification';

function Home() {
  return (
    <div className="mx-auto my-5 w-full max-w-screen-xl">
      <Banner/>
      <ListingsContainer />
      <JobNotification/>
    </div>
  );
}

export default Home;
