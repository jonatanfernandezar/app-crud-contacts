import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiContactsService } from '../../services/api-contacts.service';
import { Contacts } from '../../models/contacts.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'] // Corregido 'styleUrl' a 'styleUrls'
})

export class EditContactComponent {}
