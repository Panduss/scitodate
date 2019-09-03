import { MatchedTermsPrototype } from '../matchedTerms/prototype';

interface Prototype {
    id: string;
    score: number;
    name: string;
    firstNames: string;
    surname: string;
    firstAuthorCount: number;
    lastAuthorMatchedCount: number;
    latestAffStr: string;
    latestCountry: string;
    latestInstitution: string;
    papers: Array<string>;
    latestPaperDate: string;
    nPapers: number;
    nPapersMatched: number;
    nPapersByYears: {};
    matchedSegments: {};
    matchedTerms: MatchedTermsPrototype;
}

export { Prototype as AuthorPrototype };
