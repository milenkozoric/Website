import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skills=["angular","css3","github","html5","sass","javascript"]
  constructor() { }

  ngOnInit(): void {
    
  }

}
