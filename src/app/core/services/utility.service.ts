import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  getMovieId(linkYoutube: string): string {
    let videoId;
    const indexLastSlash = linkYoutube?.lastIndexOf('/');
    const resultSliceFromSlash = linkYoutube?.slice(indexLastSlash + 1);

    videoId = resultSliceFromSlash;
    const findWatch = resultSliceFromSlash?.indexOf('watch');
    if (findWatch !== -1) {
      const indexLastEqual = resultSliceFromSlash?.lastIndexOf('=');
      videoId = resultSliceFromSlash?.slice(indexLastEqual + 1);
    }

    return videoId;
  }
}
