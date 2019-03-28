# Code review

For this part of your technical assessment, we'd like to present you with a hypothetical scenario. Meet Joe: a relatively new engineer on the Minerva team. Joe has just received his first major project that he's solely responsible for implementing. Eager to prove himself, he dove in headfirst and cranked out a rough solution in a day. He's proud of his starting solution and has opened a pull request to merge his work in. Your task is to review Joe's work.

## The project

Joe was given the following spec for his project:

We'd like for you to build out a script that automatically creates new "weekly update" Github issues. Currently, people are expected to fill out their weekly updates with a set of tasks they'll be working on for the current week. Right now, everyone needs to create and close their updates manually, which has been leading to low adoption rates and people not filling out their updates correctly. This script should help solve both problems. The engineering team will pilot test this script and, if successful, it will be rolled out to the entire company.

Each week at 12:00am Monday morning, this script will close the previous week's issues and create new ones from the predefined template below:

```
# Update for <USER> for <WEEK_START>-<WEEK_END>

## Tasks from last week
<PREVIOUS_TASKS>
## Tasks for this week
```

This template will ensure that everyone fills in their tasks for the week, but remains minimal enough for people to put in other

These weekly updates should be stored in the `eng-team-updates` repository. If we decide to roll this out, each team will have their own weekly update repository to allow us to set viewing permissions more granularly.

----

Joe took that spec and has left the following instructions for you in his PR description:

```
Got this thing working!! :tada: This should meet most of the requirements of the project. The general flow I followed was:

1. Get all previous update issues
2. Extract the previous week's task list
3. Close the previous issues
4. Create the new ones

There were some open questions in my mind about some project specifics, so I took some guesses on what would work best. Let me know if you think there's anything I should change!

To test:

I didn't want to work with Github just yet, so I've used to local filesystem to test my changes to avoid spamming everyone with notifications. I just copied @agastya's existing update to use as a test case (thanks for being a Guinea pig for me!) and used that as a base for everyone on the team. Working with real Github issues via the API will come in a future PR.

1. Run the script using `node new_updates.js`
2. You should see new updates created for each person in the `new_updates` directory
```

## Requirements

Give us your list of feedback that you would give to Joe in a markdown document. Your feedback should be in priority order, with the most important thing at the top. You'll be primarily evaluated on the following criteria:

1. Prioritization
2. Tone
3. Accuracy

You are welcome to give any feedback you feel is relevant. It does not have to be specific to Joe's code. Much of this is left open ended on purpose to see how you naturally give feedback. Please also include a short summary at the end detailing how you created your list of feedback. If you have any questions, don't hesitate to reach out.

_NOTE_: If you need to refer to specific lines of code, use the format LX-LY to indicate the relevant lines, where `X` represents the starting line and `Y` represents the ending line
