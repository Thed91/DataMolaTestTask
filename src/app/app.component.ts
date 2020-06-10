import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import DataJson from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  currentPage = 1;

  data: any[];
  column: string;
  isDesc: boolean;
  direction: number;
  name: string;
  genre: string = null;
  premiere: string = null;

  headers = ['Name', 'Season', 'Network', 'Premiere'];
  genreList: string[];
  yearsList: string[];
  itemsPerPage: number;

  sort(property){
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  initGenres(){
    this.genreList = [];
    this.data.forEach(item => {
      this.genreList.push(...item.genre);
    });
    const tempSet = new Set(this.genreList);
    this.genreList = Array.from(tempSet.values());
  }

  initYearsList() {
    this.yearsList = [];
    this.data.forEach(item => {
      this.yearsList.push(item.premiere.substring(item.premiere.length - 4));
    });
  }

  ngOnInit(): void {
    this.data = DataJson;
    this.itemsPerPage = 1;
    this.initGenres();
    this.initYearsList();
  }

  setItemPerPage(value) {
    this.itemsPerPage = value;
    this.currentPage = 1;
  }
}
