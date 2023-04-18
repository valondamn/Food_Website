import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router : Router) {

  }
  searchTerm:String  = "";
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  search():void{
if (this.searchTerm){
  this.router.navigateByUrl('/search/' + this.searchTerm)
  }

}}
