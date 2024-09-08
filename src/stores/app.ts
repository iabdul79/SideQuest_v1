// Utilities
import { defaultCandidate, getCandidatesList } from '@/services/candidates'
import { defaultCandidateJob, defaultManagerJob, getCandidatesJobsList, getDate, getManagerJobsList } from '@/services/jobs'
import { IAppState, ICandidateProfile, IJobCandidate, IJobManager, IPostJob } from '@/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    theme: 'light',
    jobListings: {
      candidateJobs: [],
      managerJobs: [],
    },
    managerProfile: null,
    candidateProfile: defaultCandidate(),
    candidates: [],
    candidateNavigationItems: [],
    managerNavigationItems: [],
    activeNavigation: '',
    activeCandidateJobId: '',
    activeManagerJobId: ''
  }),
  getters: {
    getCandidatesJobsList(state): IJobCandidate[] {
      return state.jobListings.candidateJobs
    },
    getManagerJobsList(state): IJobCandidate[] {
      return state.jobListings.managerJobs
    },
    getCandidateActiveJobFromId(state): IJobCandidate {
      const activeJob = state.jobListings.candidateJobs.find((job) => job.id === state.activeCandidateJobId)
      return activeJob ? activeJob : defaultCandidateJob()
    },
    getManagerActiveJobFromId(state): IJobManager {
      const activeJob = state.jobListings.managerJobs.find((job) => job.id === state.activeManagerJobId)
      return activeJob ? activeJob : defaultManagerJob()
    },
    getAppliedCandidatesList(state): ICandidateProfile[] {
      const activeManagerJob = this.getManagerActiveJobFromId
      console.log(activeManagerJob)
      return state.candidates.filter((candidate) => activeManagerJob.appliedCandidates.includes(candidate.id))
    },
    getConfirmedCandidatesList(state): ICandidateProfile[] {
      const activeManagerJob = this.getManagerActiveJobFromId
      return state.candidates.filter((candidate) => activeManagerJob.confirmedCandidates.includes(candidate.id))
    },
    getSuggestedCandidatesList(state): ICandidateProfile[] {
      const activeManagerJob = this.getManagerActiveJobFromId
      return state.candidates.filter((candidate) => activeManagerJob.suggestedCandidates.includes(candidate.id))
    }
  },
  actions: {
    fetchAndUpdateCandidatesJobsList() {
      this.jobListings.candidateJobs = getCandidatesJobsList()
    },
    fetchAndUpdateManagerJobsList() {
      this.jobListings.managerJobs = getManagerJobsList()
    },
    fetchAndUpdateCandidatesList() {
      this.candidates = getCandidatesList()
    },
    setCurrentCandidateProfile(id: string) {
      this.candidateProfile = this.candidates.find((candidate) => candidate.id === id) || defaultCandidate()
    },
    updateActiveCandidateJobId(id: string) {
      this.activeCandidateJobId = id
    },
    updateActiveManagerJobId(id: string) {
      this.activeManagerJobId = id
    },
    createJobPost(job: IPostJob) {
      const newJobPost: IJobManager = {
        ...job,
        id: `${Math.floor(Math.random() * 1000)}`,
        description: [
          {
            title: 'Problem statement',
            paragraph: job.description
          }
        ],
        status: 'open',
        appliedCandidates: [],
        confirmedCandidates: [],
        suggestedCandidates: [],
        positionsRequired: 2,
        postStatus: 'open',
        postedBy: this.managerProfile?.name || 'Michael Scott',
        shortDescription: [job.description.substring(0, 50), job.description.substring(50, 100)],
        postedDate: getDate(new Date()),
      }
      this.jobListings.managerJobs = [newJobPost, ...this.jobListings.managerJobs]
      this.jobListings.candidateJobs = [newJobPost, ...this.jobListings.candidateJobs]
      console.log(this.jobListings.managerJobs)
    }
  }
})
