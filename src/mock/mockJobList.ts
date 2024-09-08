import { IJobCandidate, IJobManager } from "@/types";

export const JobListCandidate: IJobCandidate[] = [
  {
    "id": "1",
    "title": "Software Engineer",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Sunt elit ad irure duis magna cillum ad ut eiusmod velit et qui non nulla.", "Culpa officia et ea consequat sint pariatur sit ullamco ea et dolor nulla."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Java", "Python", "SQL"],
    "postedBy": "Company A",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  },
  {
    "id": "2",
    "title": "Product Manager",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Enim adipisicing adipisicing voluptate est aliqua.", "Aliquip velit fugiat enim voluptate qui laboris elit labore do nostrud excepteur."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Product Management", "Market Research", "Data Analysis"],
    "postedBy": "Company B",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  },
  {
    "id": "3",
    "title": "UI/UX Designer",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Ea ea sit quis et eu est incididunt nostrud minim eu reprehenderit commodo fugiat.", "Aliqua ut proident dolor fugiat labore ullamco esse nisi nostrud enim ex."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Adobe XD", "Figma", "User Research"],
    "postedBy": "Company C",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  },
  {
    "id": "4",
    "title": "Data Scientist",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Quis ad veniam officia nisi sint esse ut consequat reprehenderit dolor.", "Nisi deserunt pariatur qui amet sunt laborum culpa ea dolore."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Python", "SQL", "Machine Learning"],
    "postedBy": "Company D",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  },
  {
    "id": "5",
    "title": "Project Manager",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Consequat cupidatat in eu dolore.", "Adipisicing Lorem dolor deserunt elit velit sit qui ex."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Project Management", "Agile Methodology", "Risk Management"],
    "postedBy": "Company E",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  },
  {
    "id": "6",
    "title": "Sales Representative",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Est esse consectetur sit incididunt.", "Incididunt adipisicing quis laboris exercitation anim duis in nulla aute laborum."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ",
      }
    ],
    "status": "Open",
    "skills": ["Sales", "Market Research", "Risk Management"],
    "postedBy": "Company E",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5
  }
]

export const postedJobList: IJobManager[] = [
  {
    "id": "1",
    "title": "Software Engineer",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Sunt elit ad irure duis magna cillum ad ut eiusmod velit et qui non nulla.", "Culpa officia et ea consequat sint pariatur sit ullamco ea et dolor nulla."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Java", "Python", "SQL"],
    "postedBy": "Company A",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["1", "2", "3"],
    "confirmedCandidates": ["4", "5"],
    "suggestedCandidates": ["6", "7", "8"],
  },
  {
    "id": "2",
    "title": "Product Manager",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Enim adipisicing adipisicing voluptate est aliqua.", "Aliquip velit fugiat enim voluptate qui laboris elit labore do nostrud excepteur."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Product Management", "Market Research", "Data Analysis"],
    "postedBy": "Company B",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["4", "5", "6"],
    "confirmedCandidates": ["7", "10"],
    "suggestedCandidates": ["8", "9", "3"],
  },
  {
    "id": "3",
    "title": "UI/UX Designer",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Ea ea sit quis et eu est incididunt nostrud minim eu reprehenderit commodo fugiat.", "Aliqua ut proident dolor fugiat labore ullamco esse nisi nostrud enim ex."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Adobe XD", "Figma", "User Research"],
    "postedBy": "Company C",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["5", "6", "7", "3"],
    "confirmedCandidates": ["8", "9"],
    "suggestedCandidates": ["10", "1", "2"],
  },
  {
    "id": "4",
    "title": "Data Scientist",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Quis ad veniam officia nisi sint esse ut consequat reprehenderit dolor.", "Nisi deserunt pariatur qui amet sunt laborum culpa ea dolore."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Python", "SQL", "Machine Learning"],
    "postedBy": "Company D",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["4", "5", "9"],
    "confirmedCandidates": ["3", "1"],
    "suggestedCandidates": ["2", "6", "10"],
  },
  {
    "id": "5",
    "title": "Project Manager",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Consequat cupidatat in eu dolore.", "Adipisicing Lorem dolor deserunt elit velit sit qui ex."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit..."
      }
    ],
    "status": "Open",
    "skills": ["Project Management", "Agile Methodology", "Risk Management"],
    "postedBy": "Company E",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["8", "7", "9"],
    "confirmedCandidates": ["2", "1"],
    "suggestedCandidates": ["3", "4", "6"],
  },
  {
    "id": "6",
    "title": "Sales Representative",
    "subtitle": "Platform Engineering",
    "shortDescription": ["Est esse consectetur sit incididunt.", "Incididunt adipisicing quis laboris exercitation anim duis in nulla aute laborum."],
    "description": [
      {
        "title": "About the Role",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "Responsibilities",
        "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ",
      }
    ],
    "status": "Open",
    "skills": ["Sales", "Market Research", "Risk Management"],
    "postedBy": "Company E",
    "postedDate": "23, June - 2024",
    "hoursRequired": 4.5,
    "positionsRequired": 3,
    "postStatus": "Open",
    "appliedCandidates": ["5", "7", "8"],
    "confirmedCandidates": ["2", "1"],
    "suggestedCandidates": ["3", "4", "6"],
  }
]