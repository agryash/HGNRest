const express = require('express');

const routes = function (TimeEntry) {
  const TimeEntryRouter = express.Router();

  const controller = require('../controllers/timeEntryController')(TimeEntry);

  TimeEntryRouter.route('/TimeEntry').post(controller.postTimeEntry);

  TimeEntryRouter.route('/TimeEntry/:timeEntryId')
    .put(controller.editTimeEntry)
    .delete(controller.deleteTimeEntry);

  TimeEntryRouter.route('/TimeEntry/user/:userId/:fromdate/:todate').get(
    controller.getTimeEntriesForSpecifiedPeriod,
  );

  TimeEntryRouter.route('/TimeEntry/users').post(controller.getTimeEntriesForUsersList);

  TimeEntryRouter.route('/TimeEntry/reports').post(controller.getTimeEntriesForReports);

  TimeEntryRouter.route('/TimeEntry/lostUsers').post(controller.getLostTimeEntriesForUserList);

  TimeEntryRouter.route('/TimeEntry/lostProjects').post(
    controller.getLostTimeEntriesForProjectList,
  );

  TimeEntryRouter.route('/TimeEntry/lostTeams').post(controller.getLostTimeEntriesForTeamList);

  TimeEntryRouter.route('/TimeEntry/projects/:projectId/:fromDate/:toDate').get(
    controller.getTimeEntriesForSpecifiedProject,
  );

  TimeEntryRouter.route('/TimeEntry/recalculateHoursAllUsers/tangible').post(
    controller.recalculateHoursByCategoryAllUsers,
  );

  TimeEntryRouter.route('/TimeEntry/recalculateHoursAllUsers/intangible').post(
    controller.recalculateIntangibleHrsAllUsers,
  );

  TimeEntryRouter.route('/TimeEntry/backupAllUsers/HoursByCategory').post(
    controller.backupHoursByCategoryAllUsers,
  );

  TimeEntryRouter.route('/TimeEntry/backupAllUsers/totalIntangibleHrs').post(
    controller.backupIntangibleHrsAllUsers,
  );

  return TimeEntryRouter;
};

module.exports = routes;
