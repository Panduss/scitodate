import { MatchedTermsPrototype } from '../matchedTerms/prototype';

interface Prototype {
    authorList: Array<{}>;
    date: string;
    id: string;
    isAuthorFirstPosition: boolean;
    isAuthorLastPosition: boolean;
    link: string;
    matched: boolean;
    matchedSegments: {};
    matchedTerms: MatchedTermsPrototype;
    nauthors: number;
    title: string;
}

export { Prototype as PapersPrototype };
