import { AuthorService } from './author.service';
import { AuthorResponseDto } from './dto/author-response.dto';
import { AuthorRequestDto } from './dto/author-request.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getHello(running_num_author: number, author_id: number, fname: string, surname: string): AuthorResponseDto;
    getByAuthorId(authorId: number): AuthorResponseDto;
    create(body: AuthorRequestDto): AuthorResponseDto;
}
