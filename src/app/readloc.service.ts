import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes this service available across the application
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data); // Parse data if it's a JSON string
      } catch (error) {
        return data; // Return raw data if parsing fails
      }
    }
    return null;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value)); // Stringify value if it's an object
  }

  // You can add methods for setting and removing items as well
}
