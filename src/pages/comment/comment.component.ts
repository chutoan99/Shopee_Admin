import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from 'src/services/comment.service';
import { Comment } from 'src/types/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  dataSources$!: Observable<Comment[]>;
  constructor(private commentService: CommentService) {}
  ngOnInit(): void {
    this.dataSources$ = this.commentService.getAllComment('shopid=267466458');
  }
}
