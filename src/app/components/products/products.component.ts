import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
private fragment: string;
  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; console.log("FRagment change",fragment);this.goToAnchor(); });
    console.log("this.route.fragment",this.route.fragment)
  }
  // ngAfterViewInit(): void {
  //   this.goToAnchor();
  // }

  goToAnchor(){
    console.log("FRAGMENT!",this.fragment)
    try {
      var aTag = $("#"+this.fragment);
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    } catch (e) {console.log("SCROLL error", e) }
  }

}
