import axios from 'axios';
import { Gif } from '../App';


/**
 *
 * @description Singleton
 */
class GifService {
  private http = axios.create({ baseURL: 'https://api.giphy.com/v1/gifs/' });
  private static instance: GifService | null = null;

  private constructor() { }

  static getInstance() {
    if (!GifService.instance) {
      GifService.instance = new GifService();
    }
    return GifService.instance;
  }

  search(gif: string) {
    if (gif.trim().length === 0) return Promise.resolve([]);

    return new Promise<Gif[]>((resolve, reject) => {
      this.http.get<{ data: { id: string, images: { downsized_medium: { url: string } }, title: string }[] }>('search', {
        params: {
          api_key: 'rFnnlbGo7zTuLsZac3g29ryhRWl8o4uv',
          q: gif,
          limit: 10
        },
      })
        .then(({ data: { data } }) => {
          resolve(data.map(({ id, title, images: { downsized_medium: { url: imageUrl } } }) => ({ id, title, imageUrl })));
        })
        .catch((err) => reject(err));
    });
  }
}

export default GifService.getInstance();
