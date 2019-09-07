import { MatchedTermsPrototype } from '../matchedTerms/prototype';
import { PapersPrototype } from '../papers/prototype';
import { MatchedSegmentsPrototype } from '../machedSegments/prototype';
import { NPaperByYearPrototype } from '../npapersByYear/prototype';

interface Prototype {
    id: string;
    name: string;
    firstNames: string;
    firstAuthorCount: number;
    firstAuthorMatchedCount: number;
    lastAuthorCount: number;
    lastAuthorMatchedCount: number;
    latestAffStr: string;
    latestCountry: string;
    latestCountryCode: string;
    latestInstAffstr: string;
    latestInstitution: string;
    latestPaperDate: string;
    matchedSegments: MatchedSegmentsPrototype;
    matchedTerms: MatchedTermsPrototype;
    npapers: number;
    npapersByYears: NPaperByYearPrototype;
    npapersMatched: number;
    papers: Array<PapersPrototype>;
    score: number;
    surname: string;
}

export { Prototype as AuthorPrototype };
