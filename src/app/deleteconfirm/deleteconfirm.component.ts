import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item:string | null | undefined;

  @Output() onDelete = new EventEmitter;
  
  @Output() onCancel = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  
  delete(){
    this.onDelete.emit(this.item)
  }
  cancel(){
    this.onCancel.emit();
  }
}
