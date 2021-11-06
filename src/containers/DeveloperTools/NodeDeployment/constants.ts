import {ROUTES} from 'constants/routes';

export const NODE_DEPLOYMENT_PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  bank: 'Bank',
  validator: 'Validator',
};

export const bankPath = `${ROUTES.tools.nodeDeployment}/bank`;
export const validatorPath = `${ROUTES.tools.nodeDeployment}/validator`;

export const NODE_DEPLOYMENT_ITEMS = [
  {
    title: 'Bank',
    url: bankPath,
  },
  {
    title: 'Validator',
    url: validatorPath,
  },
];

export enum BankNodeDeploymentId {
  KeyGeneration = 'key-generation',
  InstallDependencies = 'install-dependencies',
  Firewall = 'firewall',
  ProjectSetup = 'project-setup',
  Nginx = 'nginx',
  Redis = 'redis',
  GatewayInterface = 'gateway-interface',
  Celery = 'celery',
  SystemServices = 'system-services',
  StaticFilesAndApplications = 'static-files-and-application',
  Troubleshooting = 'troubleshooting',
}

export enum ValidatorNodeDeploymentId {
  KeyGeneration = 'key-generation',
  InstallDependencies = 'install-dependencies',
  Firewall = 'firewall',
  ProjectSetup = 'project-setup',
  Nginx = 'nginx',
  Redis = 'redis',
  GatewayInterface = 'gateway-interface',
  Celery = 'celery',
  SystemServices = 'system-services',
  StaticFilesAndApplications = 'static-files-and-application',
  Troubleshooting = 'troubleshooting',
}

export const PATHNAME_TO_DROPDOWN_SELECTIONS: Record<string, {title: string; url: string}[]> = {
  bank: [
    {
      title: 'Key Generation',
      url: `${bankPath}#${BankNodeDeploymentId.KeyGeneration}`,
    },
    {
      title: 'Install Dependencies',
      url: `${bankPath}#${BankNodeDeploymentId.InstallDependencies}`,
    },
    {
      title: 'Firewall',
      url: `${bankPath}#${BankNodeDeploymentId.Firewall}`,
    },
    {
      title: 'Project Setup',
      url: `${bankPath}#${BankNodeDeploymentId.ProjectSetup}`,
    },
    {
      title: 'Nginx',
      url: `${bankPath}#${BankNodeDeploymentId.Nginx}`,
    },
    {
      title: 'Redis',
      url: `${bankPath}#${BankNodeDeploymentId.Redis}`,
    },
    {
      title: 'Gateway Interface',
      url: `${bankPath}#${BankNodeDeploymentId.GatewayInterface}`,
    },
    {
      title: 'Celery',
      url: `${bankPath}#${BankNodeDeploymentId.Celery}`,
    },
    {
      title: 'System Services',
      url: `${bankPath}#${BankNodeDeploymentId.SystemServices}`,
    },
    {
      title: 'Static Files and Applications',
      url: `${bankPath}#${BankNodeDeploymentId.StaticFilesAndApplications}`,
    },
    {
      title: 'Troubleshooting',
      url: `${bankPath}#${BankNodeDeploymentId.Troubleshooting}`,
    },
  ],
  validator: [
    {
      title: 'Key Generation',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.KeyGeneration}`,
    },
    {
      title: 'Install Dependencies',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.InstallDependencies}`,
    },
    {
      title: 'Firewall',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.Firewall}`,
    },
    {
      title: 'Project Setup',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.ProjectSetup}`,
    },
    {
      title: 'Nginx',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.Nginx}`,
    },
    {
      title: 'Redis',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.Redis}`,
    },
    {
      title: 'Gateway Interface',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.GatewayInterface}`,
    },
    {
      title: 'Celery',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.Celery}`,
    },
    {
      title: 'System Services',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.SystemServices}`,
    },
    {
      title: 'Static Files and Applications',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.StaticFilesAndApplications}`,
    },
    {
      title: 'Troubleshooting',
      url: `${validatorPath}#${ValidatorNodeDeploymentId.Troubleshooting}`,
    },
  ],
};
