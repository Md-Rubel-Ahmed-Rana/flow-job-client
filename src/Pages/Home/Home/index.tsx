import React from 'react';
import Users from '../../../features/users/Users';
import Banner from '../Banner';
import JobTopics from '../JobTopics';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <>
        <Users />
          <Banner />
          <JobTopics />
          <ServiceInfo />
        </>
    );
};

export default Home;