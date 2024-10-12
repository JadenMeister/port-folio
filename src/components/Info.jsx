import React from 'react';
import '../styles/Info.css';
import { Heading } from '@chakra-ui/react';


const Info = () => {
    return (
        <div className="Info_container">
            <Heading as="h1" fontSize="2xl" fontWeight="bold">
                Profile
            </Heading>

        </div>
    );
};

export default Info;