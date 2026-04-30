import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants/api.constants';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`, data);
    }

    register(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER}`, data);
    }

    sendOtp(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.SEND_OTP}`, data);
    }

    verifyOtp(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.VERIFY_OTP}`, data);
    }

    logout(): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.LOGOUT}`, {});
    }

    refreshToken(): Observable<any> {
        return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {});
    }
}