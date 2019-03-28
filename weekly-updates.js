const fs = require('fs');

const getIssues = () => {
  // TODO: query the github API to get these issues
  var issues = fs.readdirSync('./previous_issues');
  var issueMarkdowns = [];
  for (var i = 0; i < issues.length; i++) {
    var issueMarkdown = fs.readFileSync('./previous_issues/' + issues[i], { encoding: 'utf8' });
    issueMarkdowns.push(issueMarkdown);
  }

  return issueMarkdowns;
};

const getSection = (issue) => issue.split('## Tasks for this week')[1];

const closeIssues = (issues) => {
  // TODO: implement this lol
};

const createIssues = (issues) => {

};

const main = () => {
  let issues = getIssues();
  let sections = issues.map(getSection);

  console.log(sections);
};

main();