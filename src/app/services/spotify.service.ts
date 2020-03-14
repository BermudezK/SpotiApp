import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    
    const URL = `https://api.spotify.com/v1/${query}`;
    console.log(URL);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB51KGK_pC7vVkXoJ70TtEtqWppD8YL-1k84NRwbBkyBVCZtbX09ITkke-mGJtLrPkZJeITR5mEs_QTepY'
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtistas(artista: string) {

    return this.getQuery(`search?q=${artista}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
