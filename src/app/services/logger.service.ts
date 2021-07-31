import { Injectable } from '@angular/core';

export class Logger {
  constructor(private readonly context?: string) {}

  log(message: any, ...optionalParams: any[]) {
    if (this.context) {
      console.log(`[${this.context}]`, message, optionalParams);
      return;
    }
    console.log(message, optionalParams);
  }
}
