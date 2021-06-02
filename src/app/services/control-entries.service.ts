import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ControlEntriesService {
  private apiServer = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   *  Http Get
   * @returns Data fetched from back-end
   */
  getUserEntries() {
    return this.http
      .get<ContaCliente[]>(this.apiServer + "/entry-control")
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Handling service error
   * @returns error messages from back-end
   */
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
