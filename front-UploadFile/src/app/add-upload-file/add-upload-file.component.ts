import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/upload-file.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-upload-file',
  templateUrl: './add-upload-file.component.html',
  styleUrls: ['./add-upload-file.component.css']
})
export class AddUploadFileComponent implements OnInit {

  files!: File[];
  FormArticle:FormGroup;
  selectedFileName:any;
  constructor(private service:UploadFileService) { }

  ngOnInit() {
    this.FormArticle= new FormGroup({
 
      id: new FormControl(''),
      file:new FormControl('')
      
        });
  }

  selectFile(event: any) {
    this.files = event.target.files;
    if (this.files && this.files.length > 0) {
      this.selectedFileName = Array.from(this.files).map(file => file.name).join(', ');
      console.log("file name:",this.selectedFileName);
    }
  }
  

  uploadFile() {
    this.service.add(this.files).subscribe(
       (data) => {
        console.log("data",data);
        console.log("files Upoad:",this.files);
        console.log("file uploaded");
      },
      (err) => {
        console.log(err);
      }
    );
  }
  }

