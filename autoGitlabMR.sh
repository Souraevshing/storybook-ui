#!/bin/bash
# Extract the host where the server is running, and add the URL to the APIs
HOST="https://gitlab.com/api/v4/projects/"


# CREATE MR FOR THE BRANCH
TARGET_BRANCH=$1;
echo "Checking MR for Target - ${TARGET_BRANCH}, Source - ${CI_COMMIT_REF_NAME}"

# The description of our new MR, we want to remove the branch after the MR has
# been closed
if [ ${TARGET_BRANCH} == "stable" ];
then
BODY="{
    \"id\": ${CI_PROJECT_ID},
    \"source_branch\": \"${CI_COMMIT_REF_NAME}\",
    \"target_branch\": \"${TARGET_BRANCH}\",
    \"title\": \"WIP: ${CI_COMMIT_REF_NAME}\",
    \"assignee_id\":\"${GITLAB_USER_ID}\",
    \"labels\":\"Stable,autoMR\"
}";
else
BODY="{
    \"id\": ${CI_PROJECT_ID},
    \"source_branch\": \"${CI_COMMIT_REF_NAME}\",
    \"target_branch\": \"${TARGET_BRANCH}\",
    \"title\": \"WIP: ${CI_COMMIT_REF_NAME}\",
    \"assignee_id\":\"${GITLAB_USER_ID}\",
    \"labels\":\"autoMR\"
}";
fi

# Require a list of all the merge request and take a look if there is already
# one with the same source and target branch
LISTMR=`curl --silent "${HOST}${CI_PROJECT_ID}/merge_requests?state=opened" --header "PRIVATE-TOKEN:${automatic_mr_token}"`;
COUNTBRANCHES=`echo ${LISTMR} | grep -o "\"target_branch\":\"${TARGET_BRANCH}\",\"source_branch\":\"${CI_COMMIT_REF_NAME}\"" | wc -l`;

# No MR found, let's create a new one
if [ ${COUNTBRANCHES} -eq "0" ];
then
    curl -X POST "${HOST}${CI_PROJECT_ID}/merge_requests" \
        --header "PRIVATE-TOKEN:${automatic_mr_token}" \
        --header "Content-Type: application/json" \
        --data "${BODY}";
    echo "Opened a new merge request for ${TARGET_BRANCH} | WIP: ${CI_COMMIT_REF_NAME} and assigned to you";
else
    echo "No new merge request opened for ${TARGET_BRANCH}";
fi
