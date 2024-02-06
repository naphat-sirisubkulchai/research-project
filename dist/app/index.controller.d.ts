import { IndexService } from './index.service';
export declare class IndexController {
    private readonly appService;
    constructor(appService: IndexService);
    getHello(): string;
    test(): string;
}
