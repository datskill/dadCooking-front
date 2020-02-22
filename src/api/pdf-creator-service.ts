import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recette } from 'src/app/models/recette';
import { Injectable } from '@angular/core';

const pdfCreatorUrl = 'http://localhost:8080/recipe-create-pdf';
const getPdfUrl = 'http://localhost:8080/recipe-get-pdf';

@Injectable({
    providedIn: 'root'
  })
  
export class pdfCreator {
    constructor(private http: HttpClient, private recipe: Recette) { }

    PostPdfParameters(recipeIds: number[]): Observable<Recette[]> {
        return this.http.post<any>(pdfCreatorUrl, {
            recipeIds: recipeIds
        });
    }

    GetPdf() {
        return this.http.get<Recette[]>(getPdfUrl);
    }

}
