import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>
            <h1>Hero Page</h1>
            <Button>Hero Button</Button>
            <Button variant='secondary'>Hero Button</Button>
            <Button variant='outline'>Hero Button</Button>
        </div>
    );
};

export default HeroPage;