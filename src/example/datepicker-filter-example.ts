import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerFilterExample {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group()
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */