import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

type AddressFormModel = {
  street: number;
  city: string;
  state: string;
  zip: string;
};

type ProfileFormModel = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  address: AddressFormModel;
  aliases: FormArray;
};

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  private fb = inject(FormBuilder) 
  
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [null],
    address: this.fb.nonNullable.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  }) 

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }



  updateProfile() {
    // console.log(this.profileForm.) // Try new types here
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
