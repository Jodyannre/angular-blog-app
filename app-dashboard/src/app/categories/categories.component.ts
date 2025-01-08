import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  firestore: Firestore = inject(Firestore)

  async onSubmit(formData: NgForm) {
    const categoryData = {
      category: formData.value.category
    }
    const newCollection = collection(this.firestore, 'categories');
    const docRef = await addDoc(newCollection, categoryData)
    //#delete
    console.log('Document written with ID: ', docRef.id);
  }
}
