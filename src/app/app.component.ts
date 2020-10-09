import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  fields = [];
  selected ='';

  divsArray = ['div1', 'div2', 'div3', 'div4'];
  fieldsArray={div1:[ "text", "password"], div2:["text", "dropdownField"], div3:["checkBox", "text"], div4:["text", "password"]}
  onAddDiv() {
    let order = 'div'+ `${this.divsArray.length+1}`; // add divs like div5,div6..etc
    this.divsArray.push(order);
    // to add fileds to newly added array
    this.fieldsArray[order] = [ "text", "password"];
  }
  showDiv(value) {
      this.selected = value;
      this.fields = this.fieldsArray[value];
  }
}
