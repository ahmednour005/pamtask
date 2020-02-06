import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../services/main.service';
import { Params, ActivatedRoute } from '@angular/router';
import {  Comments, AddComment } from '../interfaces/data.interface';
import { Subscribable, Subscription } from 'rxjs';
import { Comment } from '@angular/compiler';
declare const $: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  details: any =[];
  index: number;
  resorce:any=[];
  arr:any=[];

  constructor(private mainServ: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
        $('.topbtn').fadeIn();
      } else {
        $('.topbtn').fadeOut();
      }
    });

    $('.topbtn').click(function () {
      $('html , body').animate({ scrollTop: 0 }, 800);
    });

    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.index = +params['id'];
        }
      }
    )
   

    this.arr = this.mainServ.getArr();

   this.mainServ.getData().subscribe(res => {

      let resources = res["articles"];
      this.details= resources[this.index];
    })  

    this.UpdateComment();
  }

  UpdateComment(){
    this.mainServ.getData().subscribe(res => {
    let a =res["articles"];
    let p=a[this.index];
    this.resorce=p;
    if(!this.resorce.comment){
      this.resorce.comment=[];
    }
    this.resorce["comment"].push(this.arr);
  })
 }

  AddComents(f) { 
   this.mainServ.AddComents(this.index,f.value);
    this.UpdateComment();
    f.reset();
  }



}
