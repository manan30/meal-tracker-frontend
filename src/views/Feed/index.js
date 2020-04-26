import React, { useEffect, useState } from 'react';
import { getFeedRecipes } from '../../api/Feed';
import useWindowSize from '../../hooks/useWindowSize';
import { Wrapper } from './styled';

function Feed() {
  const [feed, setFeed] = useState({ topRecipes: [], feedRecipes: {} });
  const { width } = useWindowSize();

  useEffect(() => {
    (async function fetch() {
      try {
        const { data } = await getFeedRecipes(1);
        setFeed((prevState) => ({ ...prevState, feedRecipes: data.data }));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Wrapper />;
}

export default Feed;

// TODO: Fetch feed only after certain time period
