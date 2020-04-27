import React, { useEffect, useState } from 'react';
import { getFeedRecipes } from '../../api/Feed';
import useWindowSize from '../../hooks/useWindowSize';
import FeedDesktop from './Desktop';
import FeedMobile from './Mobile';

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

  return width < 767 ? (
    <FeedMobile recipes={feed.feedRecipes} />
  ) : (
    <FeedDesktop topRecipes={feed.topRecipes} feedRecipes={feed.feedRecipes} />
  );
}

export default Feed;

// TODO: Fetch feed only after certain time period
// TODO: Add the you're all set check mark when infinite scroll has no more items to show
