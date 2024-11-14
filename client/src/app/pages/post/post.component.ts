import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { PostService } from './post.service';
import { Post_i } from './postinterface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatCardActions, MatButton],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private postService: PostService) {}
  posts: Post_i[] = [];

  ngOnInit() {
    this.postService.getAll().subscribe((data) => {
      this.posts = data
      console.log(data);
    });
  }
}
