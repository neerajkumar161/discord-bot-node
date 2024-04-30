import { TOKENS } from './env.js';

export async function generateGif(query) {
  const featuredUrl = `https://g.tenor.com/v2/featured?&key=${TOKENS.TENOR_KEY}&limit=20&mediaFilter=gif`;
  const queryUrl = `https://g.tenor.com/v2/search?q=${query}&key=${TOKENS.TENOR_KEY}&limit=1`;
  const response = await fetch(query ? queryUrl : featuredUrl);
  const result = await response.json();

  if (!query && result.results.length > 0) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return result.results[randomNumber].url;
  }

  return result?.results[0]?.url || 'No gif found';
}