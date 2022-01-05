import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  form: FormGroup;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      url: new FormControl()
    })
  }

  onSubmit(url :string) {
      console.log("valor mudou", url);
      this.communicationService.url.next(url);
  }

}
