import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentService } from 'src/services/comment.service';
import { AppState } from 'src/shared/app.state';
import { shopidSelector } from 'src/shared/inforShop/inforShop.selector';
import { Comment } from 'src/types/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  dataSources$!: Observable<Comment[]>;
  shopid!: number;
  constructor(private commentService: CommentService, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.pipe(select(shopidSelector)).subscribe((res: number) => {
      this.shopid = res;
      if (this.shopid) this.dataSources$ = this.commentService.getAllComment(this.shopid);
    });
  }
}
