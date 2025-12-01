export interface leadRequest {
    lead_name: string;
    lead_email: string;
    lead_phone: string;
    interest_plan: string;
}

export interface leadResponse {
    message: string;

    data: {
        lead_name: string;
        lead_email: string;
        lead_phone: string;
        interest_plan: string;
    }
}