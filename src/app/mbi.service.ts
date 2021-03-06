import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mbi } from './mbi';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MbiService {

  constructor(private http: HttpClient) { }

  generateMbi(): Observable<Mbi> {
    return this.http.get<Mbi>(`${environment.apiUrl}/generate`)
    .pipe(
      catchError(this.handleError<Mbi>('getMbi'))
    );
  }

  verifyMbi(mbiToVerify: string): Observable<boolean> {
    var body = {
      mbi: mbiToVerify
    }

    var formData: any = new FormData();
    formData.append('mbi', mbiToVerify)

    return this.http.post<boolean>(`${environment.apiUrl}/verify`, formData)
    .pipe(
      catchError(this.handleError<boolean>('verifyMbi', false))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
