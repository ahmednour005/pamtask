import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details:any=[];
  constructor(private mainServ :MainService) { }

  ngOnInit() {
    $(window).scroll(function(){
      if($(this).scrollTop() > 700){
         $('.topbtn').fadeIn(); 
      }else{
          $('.topbtn').fadeOut(); 
      } 
      });
      
      $('.topbtn').click(function(){
          $('html , body').animate({scrollTop:0},800);
      });

      this.mainServ.getData().subscribe(res=>{
        this.details = res;
      })
  }

}
