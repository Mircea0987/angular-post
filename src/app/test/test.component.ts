import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private postService: PostService) {}

  cardSubtitle: any;
  cardTitle: any;
  content: any;
  img: any;

  getDataList: any = [];

  ngOnInit(): void {
    this.postService.getData().subscribe((data) => {
      this.getDataList = data;

      console.log(this.getDataList);

      this.cardSubtitle = this.getDataList.results.map(
        (cardSubtitle: any) => cardSubtitle.cardSubtitle
      );
      console.log(this.cardSubtitle);
    });
  }
}
