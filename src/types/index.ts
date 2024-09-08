export interface IDescription {
  title: string;
  paragraph: string;
}

export interface IPostJob {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  hoursRequired: number;
}

export interface IJobCandidate {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string[];
  description: IDescription[];
  postedBy: string;
  postedDate: string;
  skills: string[];
  status: string;
  hoursRequired: number;
}

export interface IJobManager extends IJobCandidate {
  appliedCandidates: string[];
  confirmedCandidates: string[];
  suggestedCandidates: string[];
  positionsRequired: number;
  postStatus: string;
}

export interface ICandidateProfile {
  id: string;
  name: string;
  email: string;
  position: string;
  skills: string[];
  pictureUrl: string;
  experience: string;
  description: IDescription[];
  certifications: string[];
  resumeFile: string;
}

export interface INavigationItem {
  id: string;
  label: string;
  route: string;
  value: string;
  icon?: string;
}

export interface IAppState {
  theme: string;
  jobListings: {
    candidateJobs: IJobCandidate[];
    managerJobs: IJobManager[];
  }
  candidateProfile: ICandidateProfile;
  managerProfile: ICandidateProfile | null;
  candidates: ICandidateProfile[];
  candidateNavigationItems: INavigationItem[];
  managerNavigationItems: INavigationItem[];
  activeNavigation: string;
  activeCandidateJobId: string;
  activeManagerJobId: string;
}