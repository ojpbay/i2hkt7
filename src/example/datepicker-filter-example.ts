import {ChangeDetectionStrategy, Component, LOCALE_ID} from '@angular/core';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  styles: [ '.form { display: flex; flex-direction: column; }' ],
  standalone: true,
  providers: [provideNativeDateAdapter(),  {provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerFilterExample {
  inceptionFilter = (inceptionDate: Date | null): boolean => {

    if (inceptionDate == null) {
      return false;
    }


    return inceptionDate < this.form.controls.expiryDate.value;
    
  };

  expiryFilter = (expiryDate: Date | null): boolean => {
    if (expiryDate == null) {
      return false;
    }


    return expiryDate > this.form.controls.inceptionDate.value;
  };

  form = this.fb.nonNullable.group({
    inceptionDate: [new Date(2024, 10, 1), Validators.required],
    expiryDate: [new Date(2024, 10, 30), Validators.required]
    });

  constructor(private readonly fb: FormBuilder) {    

  }
}




/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */