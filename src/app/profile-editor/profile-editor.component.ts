import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FetchServiceBasicApproachService } from '../fetch-service-basic-approach.service';
import { Observable, catchError, tap } from 'rxjs';
import { ToDoInterface } from '../model/to-do-interface';
import { FetchServiceClassicApproachService } from '../fetch-service-classic-approach.service';

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
  imports: [ CommonModule, FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  private fb = inject(FormBuilder) 
  private fetchServiceBasic = inject(FetchServiceBasicApproachService) 
  private fetchServiceClassic = inject(FetchServiceClassicApproachService) 

  public allTodosSignal = signal([]);
  
  profileForm  = this.fb.group({
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

  /*fetchTodos(): Observable<ToDoInterface[]> {
    return this.fetchServiceBasic.fetchTodos().pipe(
      tap((todos: ToDoInterface[]) => {
        this.onComplete(todos)
      }),
      catchError((err) => {throw err} )
    );
  }*/

  async fetchTodos() {
    const myTodosResponse: any
     = await this.fetchServiceClassic.fetchTodosClassicApproach();
    this.allTodosSignal.set(myTodosResponse);
  }

  /*onComplete(data: any) 
  :void {
    console.table(data + "data")
  }*/



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
    console.table(this.profileForm.value);
    this.fetchTodos()   
  }

}
