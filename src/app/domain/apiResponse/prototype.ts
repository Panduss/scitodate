import { AuthorPrototype } from '../author/prototype';

interface Prototype {
    authors: AuthorPrototype;
    name: string;
    total: number;
}

export { Prototype as ApiResponsePrototype };
