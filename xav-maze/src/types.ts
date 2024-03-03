interface Series {
  title: string;
  description: string;
  imageUrl: string;
  seriesId: string;
  genres: string[];
  rating: string;
}

// TODO Extend with more details from api
interface SeriesDetails extends Series {
  imageOriginalUrl: string;
  airsTime: string;
  airsDate: string[];
  status: string;
}

