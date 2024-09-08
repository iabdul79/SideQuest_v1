import { JobListCandidate, postedJobList } from "@/mock/mockJobList";
import { IJobCandidate, IJobManager } from "@/types";


export const defaultCandidateJob = (): IJobCandidate => {
  return {
    id: "",
    title: "",
    subtitle: "",
    shortDescription: [],
    description: [],
    postedBy: "",
    postedDate: "",
    skills: [],
    status: "",
    hoursRequired: 0,
  }
}

export const defaultManagerJob = (): IJobManager => {
  return {
    ...defaultCandidateJob(),
    appliedCandidates: [],
    confirmedCandidates: [],
    suggestedCandidates: [],
    positionsRequired: 0,
    postStatus: "",
  }
}
export const getCandidatesJobsList = (): IJobCandidate[] => {
  return JobListCandidate;
}

export const getManagerJobsList = (): IJobManager[] => {
  return postedJobList;
}

export const getDate = (date: Date): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfMonth} ${month} - ${year}`;
}