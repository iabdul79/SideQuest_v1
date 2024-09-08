import { candidateList } from "@/mock/mockCandidateList";
import { ICandidateProfile } from "@/types";

export const getCandidatesList = (): ICandidateProfile[] => {
  return candidateList;
}

export const defaultCandidate = (): ICandidateProfile => {
  return {
    id: "",
    name: "",
    email: "",
    position: "",
    skills: [],
    pictureUrl: "",
    experience: "",
    description: [],
    certifications: [],
    resumeFile: "",
  }
}