https://savir-nosaj.github.io/pre-work/

Code explained:
__________________________________

There are 6 different catergories Swapi provides about the Star Wars franchise, containing specific information related to the category. At the top of the page, there is 6 buttons centered that will make a request to the api, which will then return 10 values per request.

The algorithm uses a forloop that will query each item in the response, and display the information of each key-value pair. Attached to each button, is a onclick function that will plug in the desired text into the URL request made to the api. Currently, the algorithm only request each item individually, but I'll change it so that it uses ( ?page=X ) query parameter, so that information past 10 will also be able to be displayed.

Currently trying to implement more creative ways of utilizing this api to its potential with my current knowledge and skill.

Highlighted important information:
__________________________________

10 Limit
Swapi only allow returns 10 values max, per response

Rate limiting
Swapi has rate limiting to prevent malicious abuse and to make sure our service can handle a potentially large amount of traffic. Rate limiting is done via IP address and is currently limited to 10,000 API request per day. This is enough to request all the data on the website at least ten times over.

Rate slowing
Swapi now has rate slowing on top of the rate limiting. Rate slowing is also done via IP address and is currently set to slow by 100ms starting after the 5th API request within a 15 minute window. Each subsequent request will take longer to receieve a response for.
