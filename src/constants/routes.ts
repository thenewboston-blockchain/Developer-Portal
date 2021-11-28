/**
 * Internal URLs
 */

export const ROUTES = {
  legal: {
    guidelines: '/guidelines',
    privacyPolicy: '/privacy-policy',
    termsOfUse: '/terms-of-use',
  },
  projects: {
    approvedProjects: '/projects/approved-projects', // no longer used
    home: '/projects',
    rules: '/projects/rules',
  },
  tools: {
    apis: '/api',
    nodeDeployment: '/node-deployment',
    sdksAndLibraries: '/sdks-and-libraries',
    utilities: '/utilities',
  },
  tutorials: '/tutorials',
  whitepaper: {
    architecture: '/whitepaper/architecture',
    home: '/whitepaper',
    principalEntities: '/whitepaper/principal-entities',
    principalEvents: '/whitepaper/principal-events',
  },
};

/**
 * External URLs
 */
const websiteUrl = 'https://thenewboston.com';
const githubUrl = 'https://github.com/thenewboston-developers';
export const URLS = {
  github: {
    home: githubUrl,
    proposeIdeaOnly: `${githubUrl}/Projects/issues/new?assignees=&labels=Idea+Only&template=idea-only-proposal.md&title=NAME_OF_YOUR_IDEA`,
    proposeMilestone: `${githubUrl}/Projects/issues/new?assignees=&labels=Milestone&template=milestone-proposal.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER`,
    proposeMilestonePayout: `${githubUrl}/Projects/issues/new?assignees=&labels=Milestone+Payout+Request&template=milestone-payout-request.md&title=NAME_OF_PROJECT+-+NAME_OF_MILESTONE+-+MILESTONE_NUMBER`,
    proposeProjects: `${githubUrl}/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT`,
  },
  website: {
    download: `${websiteUrl}/download`,
    home: websiteUrl,
  },
};
