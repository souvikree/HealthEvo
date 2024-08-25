// redux/slice/appointment.ts
export interface Appointment {
    id: string;
    name: string;
    date: Date;
    time: string;
    doctorName: string;
    location: string;
    start: Date; 
    end: Date;   
    reason: string;  
    virtualLink?: string; 
  }
  