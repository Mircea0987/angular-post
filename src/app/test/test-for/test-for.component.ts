import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-test-for',
  templateUrl: './test-for.component.html',
  styleUrls: ['./test-for.component.css'],
})
export class TestForComponent implements OnInit {
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

      this.cardSubtitle = this.getDataList.map(
        (cardSubtitle: any) => cardSubtitle.cardSubtitle
      );
      this.cardTitle = this.getDataList.map(
        (cardTitle: any) => cardTitle.cardTitle
      );
      this.content = this.getDataList.map((content: any) => content.content);

      this.img = this.getDataList.map((img: any) => img.img);
    });
  }
}
