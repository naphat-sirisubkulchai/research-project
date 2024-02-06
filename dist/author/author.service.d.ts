import { AuthorResponseDto } from './dto/author-response.dto';
import { AuthorRequestDto } from './dto/author-request.dto';
export declare class AuthorService {
    private authors;
    get(running_num_author: number, author_id: number, fname: string, surname: string): AuthorResponseDto;
    getByAuthorId(authorId: number): AuthorResponseDto | null;
    create(body: AuthorRequestDto): AuthorResponseDto;
}
