import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = "";
  purposeOfVisit = "";
  modeOfConveyance = "";
  vehicleNo = "";
  
  date = "";
  locations = "";

  dataArray = [
    { home: "Home (Narmada Park)", purposeOfVisit: "ROUTINE VISIT", modeOfConveyance: "OWN CAR", vehicleNo: "GJ-3DN 5687", date: "2000-06-13", locations: "abc" }
  ];



  selectedIndex = null;

  constructor() { }

  ngOnInit(): void {
    this.dataArray.splice(0,1);
  }

  AddDetail(){
    let temp = {  home : this.home, purposeOfVisit : this.purposeOfVisit, modeOfConveyance : this.modeOfConveyance, vehicleNo : this.vehicleNo, date : this.date, locations : this.locations };
    this.dataArray.push(temp);    
    this.IncrementDate();
    this.locations = "";    
  }

  SelectDetail(i){
    this.selectedIndex = i;
    this.date = this.dataArray[i].date;
    this.locations = this.dataArray[i].locations;
  }

  EditDetail(){
    this.dataArray[this.selectedIndex].date = this.date;
    this.dataArray[this.selectedIndex].locations = this.locations;
    this.date = "";
    this.locations = "";
    this.selectedIndex = null;
  }
  
  DeleteDetail(i){
    this.dataArray.splice(i,1);
  }

  Reset(){
    this.locations = "";
    this.date = "";
    this.selectedIndex = null;
  }

  IncrementDate(){
    let date = parseInt(this.date.substr(8,2));
    let month = parseInt(this.date.substr(5,2));
    let year = parseInt(this.date.substr(0,4));
    if((date+1) <= ((month==1 || month==3 || month==5 || month==7 || month==7 || month==8 || month==10 || month==12) ? 31 : ((month==4 || month==6 || month==11) ? 30 : ((month==2 && (year%4==0))? 29 : 28))))
    {
      date = date+1;
    } 
    else if(month+1 <= 12){
      date = 1;
      month = month+1;
    } 
    else{
      date = 1;
      month = 1;
      year = year+1;
    }
    console.log(date+"/"+month+"/"+year);
    let dd = date.toString();
    let mm = month.toString();
    let yyyy = year.toString();
    this.date = yyyy+"-"+(mm.length < 2? "0"+mm : mm)+"-"+(dd.length < 2 ? "0"+dd : dd);
  }

  DecrementDate(){
    let date = parseInt(this.date.substr(8,2));
    let month = parseInt(this.date.substr(5,2));
    let year = parseInt(this.date.substr(0,4));
    if((date-1) > 0)
    {
      date = date-1;
    } 
    else if((month-1) > 0){
      month = month-1;
      date = ((month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) ? 31 : 
             ((month==4 || month==6 || month==11) ? 30 : 
             ((month==2 && (year%4==0))? 29 : 28)));
    } 
    else{
      date = 31;
      month = 12;
      year = year-1;
    }
    console.log(date+"/"+month+"/"+year);
    let dd = date.toString();
    let mm = month.toString();
    let yyyy = year.toString();
    this.date = yyyy+"-"+(mm.length < 2? "0"+mm : mm)+"-"+(dd.length < 2 ? "0"+dd : dd);
  }

}
