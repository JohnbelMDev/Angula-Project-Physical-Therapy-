// app.ts (or app.component.ts)
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Add this import


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Include CommonModule here
  templateUrl: './app.html',  // Points to your HTML file
  styleUrls: ['./app.css']    // Points to your CSS file
})
export class App {
  inputValue: string = '';
  submittedValue: string = '';
  

  onSubmit() {
    this.submittedValue = this.inputValue;
  }
}