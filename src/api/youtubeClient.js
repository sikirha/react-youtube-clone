import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBUE_API_KEY },
    });
  }
  //async??
  search(params) {
    return this.httpClient.get("search", params);
  }
  videos(params) {
    return this.httpClient.get("videos", params);
  }
  channels(params) {
    return this.httpClient.get("channels", params);
  }
}
//async??
//   search(keyword) {
//     return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
//   }

//   async #searchByKeyword(keyword) {
//     return this.apiClient
//       .search({
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           type: "video",
//           q: keyword,
//         },
//       })
//       .then((res) => res.data.items)
//       .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
//   }

//   async #mostPopular() {
//     return this.apiClient
//       .videos({
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           chart: "mostPopular",
//         },
//       })
//       .then((res) => res.data.items);
//   }
// }
