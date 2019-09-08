import { AuthorPrototype } from '../author/prototype';

interface Prototype {
    authors: AuthorPrototype;
    name: string;
    total: number;
    success?: boolean;
    message?: string;
}

export { Prototype as NewsFeedPrototype };
