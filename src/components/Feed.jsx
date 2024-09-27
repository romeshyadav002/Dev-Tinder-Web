import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (!feed) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + '/feed', {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {}
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
}

export default Feed;
