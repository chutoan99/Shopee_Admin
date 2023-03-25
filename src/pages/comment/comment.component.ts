import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CommentService } from 'src/services/comment.service';
import { AppState } from 'src/shared/app.state';
import { shopidSelector } from 'src/shared/inforShop/inforShop.selector';
import { Comment } from 'src/types/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  dataSources$!: Observable<Comment[]>;
  query = {
    page: 1,
    limit: 96,
  };
  constructor(private commentService: CommentService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.commentService.getAllComment(this.query).subscribe((data: Comment[]) => {
      this.dataSources$ = of(data);
    });
  }
}
