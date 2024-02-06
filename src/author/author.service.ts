import { Injectable } from '@nestjs/common';
import { AuthorResponseDto } from './dto/author-response.dto';
import { AuthorRequestDto } from './dto/author-request.dto';

@Injectable()
export class AuthorService {
    private authors: any[] = [
        {
            running_num_author: 1,
            author_id: 1,
            fname: "Sujin",
            surname: "Khomrutai"
        },
        // Add more author objects here
    ];

    get(
        running_num_author: number,
        author_id: number,
        fname: string,
        surname: string
    ): AuthorResponseDto{
        const response: AuthorResponseDto = {
            running_num_author: running_num_author,
            author_id: author_id,
            fname: fname,
            surname: surname
        }
        console.log('return success')
        return response;
    }

    getByAuthorId(authorId: number): AuthorResponseDto | null {
        console.log("Requested author_id:", authorId);
        console.log("Authors array:", this.authors);
        

        const author = this.authors.find(a => {
            console.log(`Comparing ${a.author_id} with ${authorId}`);
            return a.author_id === authorId;
        });

        if (!author) {
            console.log("Author not found");
            return null;
        }

        const response: AuthorResponseDto = {
            running_num_author: author.running_num_author,
            author_id: author.author_id,
            fname: author.fname,
            surname: author.surname,
        };

        console.log("Author found:", response);
        return response;
    }
    create(
        body: AuthorRequestDto
        ):AuthorResponseDto{
        const response: AuthorResponseDto = {
            running_num_author: body.running_num_author,
            author_id: body.author_id,
            fname: body.fname,
            surname: body.surname

        }
        return response;
    }
}
