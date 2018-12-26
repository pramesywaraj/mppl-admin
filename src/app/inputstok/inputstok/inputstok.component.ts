import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-inputstok',
  templateUrl: './inputstok.component.html',
  styleUrls: ['./inputstok.component.scss']
})
export class InputstokComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private book: BookService) { }

  selectedFile: File;


  @Input() dataBuku:any = { 
    nama: '', 
    qty: '',
    harga: '',
    description: '',
    category: '',
  };

  // uploadData:any;

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    if(!this.auth.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

  addNewBook() {
    let input = new FormData();
    input.append('nama', this.dataBuku.nama);
    input.append('qty', this.dataBuku.qty);
    input.append('harga', this.dataBuku.harga);
    input.append('description', this.dataBuku.description);
    input.append('category', this.dataBuku.category);
    input.append('image', this.selectedFile, this.selectedFile.name);

    const uploadData = input;
    console.log('wakwaw', uploadData);
    this.book.postBook(uploadData).then(result => {
      this.router.navigate(['datastok']);
    }, err => {
      this.router.navigate(['inputstok']);
    });
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

}
