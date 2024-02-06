import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResponseDto } from './dto/author-response.dto';
import { AuthorRequestDto } from './dto/author-request.dto';

@Controller()
export class AuthorController {
    constructor(private readonly authorService: AuthorService) { }
    @Get()
    getHello(
        @Param('running_num_author') running_num_author: number,
        @Param('author_id') author_id: number,
        @Param('fname') fname: string,
        @Param('surname') surname: string
    ): AuthorResponseDto {
        return this.authorService.get(running_num_author, author_id, fname, surname);
    }

    @Get(':author_id') // Define a route parameter for author_id
    getByAuthorId(@Param('author_id') authorId: number): AuthorResponseDto {
        return this.authorService.getByAuthorId(authorId);
    }

    @Post()
    create(
        @Body() body: AuthorRequestDto
    ): AuthorResponseDto {
        return this.authorService.create(body);
    }
}
