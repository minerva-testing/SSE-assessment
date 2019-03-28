const fs = require('fs');
var moment = require('moment');

const getIssues = () => {
  // TODO: query the github API to get these issues
  var issues = fs.readdirSync('./previous_issues');
  var issueMarkdowns = [];
  for (var i = 0; i < issues.length; i++) {
    var issueMarkdown = fs.readFileSync('./previous_issues/' + issues[i], { encoding: 'utf8' });
    issueMarkdowns.push({ user: issues[i].replace('.md', ''), update: issueMarkdown });
  }

  return issueMarkdowns;
};

const getSection = (issue) => issue.update.split('## Tasks for this week')[1];

const closeIssues = (issues) => {
  // TODO: implement this lol
};

const createIssues = (issues) => {
  for (var i = 0; i < issues.length; i++) {
    let issue = issues[i];
    let previousUpdate= getSection(issue);
    let today = `${moment().month() + 1}/${moment().date()}`;
    let endOfWeek = moment().add(5, 'days');
    let endOfWeekString = `${endOfWeek.month() + 1}/${endOfWeek.date()}`;
  const newUpdate = `
# Update for @${issue.user} for ${today}-${endOfWeekString}

## Tasks from last week

${previousUpdate}

# Tasks for this week
`;

  fs.writeFileSync(`./new_issues/${issue.user}.md`, newUpdate);
}
};

const main = () => {
  let issues = getIssues();
  // closeIssues(issues);
  createIssues(issues);
};

main();