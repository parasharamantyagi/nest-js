import { Resolver, Query, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Post } from './posts.dto';
import { PostService } from './posts.service';


@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly postService: PostService
  ) { }

  @Query(returns => [Post])
  async getPosts() {
    return await this.postService.findAll();
    // return [
    //   { id: '1', title: 'First Post', content: 'Content of the first post', authorId: '1' },
    //   { id: '2', title: 'Second Post', content: 'Content of the second post', authorId: '2' }
    // ]
  }

  @Mutation(() => Post)
  async getPost(@Parent() post: Post) {
    const postId = post.id; // Assuming authorId is a field in Post model
    return await this.postService.findById(postId);
  }
}