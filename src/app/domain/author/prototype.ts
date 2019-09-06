import { MatchedTermsPrototype } from '../matchedTerms/prototype';
import { PapersPrototype } from '../papers/prototype';

interface Prototype {
    id: string;
    name: string;
    firstNames: string;
    firstAuthorCount: number;
    firstAuthorMatchedCount;
    lastAuthorCount: number;
    lastAuthorMatchedCount: number;
    latestAffStr: string;
    latestCountry: string;
    latestCountryCode: string;
    latestInstAffstr: string;
    latestInstitution: string;
    latestPaperDate: string;
    matchedSegments: {};
    matchedTerms: MatchedTermsPrototype;
    npapers: number;
    npapersByYears: {};
    npapersMatched: number;
    papers: Array<PapersPrototype>;
    score: number;
    surname: string;
}

export { Prototype as AuthorPrototype };
