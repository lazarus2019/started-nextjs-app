import { useRouter } from 'next/router';
import React from 'react';

const Username = () => {
    const router = useRouter()
    console.log({router})
  return <div>Username</div>;
};

export default Username;
