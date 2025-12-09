import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { leadRequest, leadResponse } from "../../shared/models/lead.model";
import { API_CONFIG } from "../config/api.config";

@Injectable({
    providedIn: 'root',
})
export class LeadService {
    constructor(private http: HttpClient){}

    create(lead: leadRequest){
        const url = `${API_CONFIG.baseUrl}/lead`

        return this.http.post<leadResponse>(url, lead);
    }
}