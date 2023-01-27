import React from 'react';
import Candidates from '../../../features/candidate/Candidates';
import Banner from '../Banner';
import JobTopics from '../JobTopics';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <>
        <Candidates />
          <Banner />
          <JobTopics />
          <ServiceInfo />
        </>
    );
};

export default Home;