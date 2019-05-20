## HowManyAWS

Counts the number of Amazon Web Services that are currently available. At the time of writing, there are 176; when I first built this there were 175. I wonder what was added - it would be nice if I could get this to print a running list of services as they're added, and maybe let people subscribe via email.

Areas for improvement:
* I believe there is an SNS topic that supplies this information. Using that would be better than stripping the result from the AWS homepage HTML in case the formatting changes, not to mention the performance improvement that would result.
* Need to employ caching of the API result - Amazon adds new services fast, but not *that* fast.
* All-round better organisation of the repo is in order. I'm still learning best practices for storing serverless and front-end code together.

See it live: https://howmanyaws.com