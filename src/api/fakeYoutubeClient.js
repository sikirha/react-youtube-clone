import axios from "axios";

export default class FakeYoutubeClient {
  //constructor() {}

  //async??
  search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }

  videos() {
    return axios.get("/videos/popular.json");
  }
  channels() {
    return axios.get("/videos/channel.json");
  }
}
//   async #searchByKeyword(keyword) {
//     return axios
//       .get(`/videos/search.json`)
//       .then((res) => res.data.items)
//       .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
//   }

//   async #mostPopular() {
//     return axios.get(`/videos/popular.json`).then((res) => res.data.items);
//   }
// }
