import {ChangeDetectionStrategy, Component, LOCALE_ID} from '@angular/core';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  styles: [ '.form { display: flex; flex-direction: column; }' ],
  standalone: true,
  providers: [provideNativeDateAdapter(),  {provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerFilterExample {
  incpetionFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  expiryFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  form = this.fb.group({
    inceptionDate: [new Date(2024, 10, 1), {
      validators: [Validators.required]
    }],
    expiryDate: [new Date(2023, 9, 30), [Validators.required]]
 });

  constructor(private readonly fb: FormBuilder) {    

  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */