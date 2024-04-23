import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUploadFileComponent } from './add-upload-file/add-upload-file.component';

const routes: Routes = [
  { path: 'add-uploadFile', component: AddUploadFileComponent }, // Définissez les routes ici
  // Ajoutez d'autres routes au besoin
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
