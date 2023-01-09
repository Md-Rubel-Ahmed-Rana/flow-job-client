import React from 'react';
import Banner from '../Banner';
import JobTopics from '../JobTopics';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import ServiceDemo from '../ServicesDemo';

const Home = () => {
    return (
        <>
          <Banner />
          <JobTopics />
          <ServiceInfo />
          <ServiceDemo />
        </>
    );
};

export default Home;