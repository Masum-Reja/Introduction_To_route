import React from 'react';

import './FriendDetail.css';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
      const friend = useLoaderData();
      return (
             
            <div className='details'>
                  <h3>EveryThing about this person is here</h3>

                  <h4>{friend.username}</h4>
                  <p><strong>Address:</strong>
                        <span> city: {friend.address.city},</span> <span> street: {friend.address.street},</span> <span> Zip: {friend.address.zipcode} ,</span> <span>{friend.address.suite}</span>
                  </p>
            </div>
      );
};

export default FriendDetail;