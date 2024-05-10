const Role = require('../models/role');
const RolePreset = require('../models/rolePreset');

const permissionsRoles = [
  {
    roleName: 'Administrator',
    permissions: [
      // Reports
      'getWeeklySummaries',
      'getReports', // Doesn't do anything on back-end.
      'totalValidWeeklySummaries',
      // Badges
      'seeBadges',
      'assignBadges',
      'createBadges',
      'deleteBadges',
      'updateBadges',
      // Popups
      'createPopup',
      'updatePopup',
      // Projects
      'deleteProject',
      'postProject',
      'putProject',
      'assignProjectToUsers',
      // Tasks
      'importTask',
      'postTask',
      'updateTask',
      'swapTask',
      'deleteTask',
      'updateNum',
      // Teams
      'postTeam',
      'deleteTeam',
      'putTeam',
      'assignTeamToUsers',
      // Time Entries
      'editTimeEntry',
      'deleteTimeEntry',
      // 'postTimeEntry',?
      // User Profile
      'putRole',
      'postUserProfile',
      'putUserProfile',
      'putUserProfileImportantInfo',
      'changeUserStatus',
      'updatePassword',
      'deleteUserProfile',
      'infringementAuthorizer',
      'addInfringements',
      'editInfringements',
      // WBS
      'postWbs',
      'deleteWbs',
      // Inv
      'getAllInvInProjectWBS',
      'postInvInProjectWBS',
      'getAllInvInProject',
      'postInvInProject',
      'transferInvById',
      'delInvById',
      'unWasteInvById',
      'getInvIdInfo',
      'putInvById',
      'getInvTypeById',
      'putInvType',
      'getAllInvType',
      'postInvType',
      // General
      'getUserProfiles',
      'getProjectMembers',

      'getTimeZoneAPIKey',
      'checkLeadTeamOfXplus',
    ],
  },
  {
    roleName: 'Volunteer',
    permissions: ['getReporteesLimitRoles', 'suggestTask'],
  },
  {
    roleName: 'Core Team',
    permissions: [
      'getUserProfiles',
      'getProjectMembers',
      'getAllInvInProjectWBS',
      'postInvInProjectWBS',
      'getAllInvInProject',
      'postInvInProject',
      'transferInvById',
      'delInvById',
      'unWasteInvById',
      'getInvIdInfo',
      'putInvById',
      'getInvTypeById',
      'putInvType',
      'getAllInvType',
      'postInvType',
      'getWeeklySummaries',
      'getReports',
      'getTimeZoneAPIKey',
      'checkLeadTeamOfXplus',
    ],
  },
  {
    roleName: 'Manager',
    permissions: [
      'getUserProfiles',
      'getProjectMembers',
      'putUserProfile',
      'infringementAuthorizer',
      'addInfringements',
      'editInfringements',
      'getReporteesLimitRoles',
      'updateTask',
      'putTeam',
      'getAllInvInProjectWBS',
      'postInvInProjectWBS',
      'getAllInvInProject',
      'postInvInProject',
      'transferInvById',
      'delInvById',
      'unWasteInvById',
      'getInvIdInfo',
      'putInvById',
      'getInvTypeById',
      'putInvType',
      'getAllInvType',
      'postInvType',
      'getTimeZoneAPIKey',
      'checkLeadTeamOfXplus',
    ],
  },
  {
    roleName: 'Mentor',
    permissions: [
      'suggestTask',
      'getUserProfiles',
      'getProjectMembers',
      'putUserProfile',
      'infringementAuthorizer',
      'addInfringements',
      'editInfringements',
      'getReporteesLimitRoles',
      'getAllInvInProjectWBS',
      'postInvInProjectWBS',
      'getAllInvInProject',
      'postInvInProject',
      'transferInvById',
      'delInvById',
      'unWasteInvById',
      'getInvIdInfo',
      'putInvById',
      'getInvTypeById',
      'putInvType',
      'getAllInvType',
      'postInvType',
      'getTimeZoneAPIKey',
      'checkLeadTeamOfXplus',
    ],
  },
  {
    roleName: 'Owner',
    permissions: [
      'postRole',
      'deleteRole',
      'putRole',
      'addDeleteEditOwners',
      'putUserProfilePermissions',
      'changeUserStatus',
      'seeBadges',
      'assignBadges',
      'createBadges',
      'deleteBadges',
      'updateBadges',
      'createPopup',
      'updatePopup',
      'deleteProject',
      'postProject',
      'putProject',
      'assignProjectToUsers',
      'importTask',
      'postTask',
      'updateNum',
      'updateTask',
      'swapTask',
      'deleteTask',
      'postTeam',
      'deleteTeam',
      'putTeam',
      'assignTeamToUsers',
      'editTimeEntry',
      'deleteTimeEntry',
      'updatePassword',
      'getUserProfiles',
      'getProjectMembers',
      'postUserProfile',
      'putUserProfile',
      'putUserProfileImportantInfo',
      'deleteUserProfile',
      'infringementAuthorizer',
      'addInfringements',
      'editInfringements',
      'postWbs',
      'deleteWbs',
      'getAllInvInProjectWBS',
      'postInvInProjectWBS',
      'getAllInvInProject',
      'postInvInProject',
      'transferInvById',
      'delInvById',
      'unWasteInvById',
      'getInvIdInfo',
      'putInvById',
      'getInvTypeById',
      'putInvType',
      'getAllInvType',
      'postInvType',
      'getWeeklySummaries',
      'getReports',
      'getTimeZoneAPIKey',
      'checkLeadTeamOfXplus',
      'editTeamCode',
      'totalValidWeeklySummaries',
    ],
  },
];

const createInitialPermissions = async () => {
  const promises = [];
  // Add a new permission if the role has been changed in the  permissionsRoles Array
  for (let i = 0; i < permissionsRoles.length; i += 1) {
    const { roleName, permissions } = permissionsRoles[i];

    // Create Roles
    const role = new Role();
    role.roleName = roleName;
    role.permissions = permissions;
    promises.push(role.save());

    // Create Default presets

    const defaultPreset = new RolePreset();
    defaultPreset.roleName = roleName;
    defaultPreset.presetName = 'default';
    defaultPreset.permissions = permissions;
    promises.push(defaultPreset.save());
  }

  await Promise.all(promises);
};
module.exports = createInitialPermissions;
