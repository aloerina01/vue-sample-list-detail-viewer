import { ActionTypes } from '../const/ActionTypes';
import { dispatch } from '../dispatcher';

const Parser = require('rss-parser');

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API =
  'https://b.hatena.ne.jp/entrylist?url=aloerina01.github.io&mode=rss&sort=count';

const rssParser = new Parser();

export async function fetchNewFeed() {
  // api call
  const feed = await rssParser.parseURL(CORS_PROXY + API);
  console.log(feed);
  // update store
  dispatch(ActionTypes.FETCH_NEW_FEED, {
    title: feed.title,
    description: feed.description,
    items: feed.items,
  });
}
