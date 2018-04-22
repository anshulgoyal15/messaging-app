# Messaging app api
This git repo contain code of a messaging app.

## Requirements
* node>=8.1.1
* mongodb>=3.6.1

server runs on port 3000;


# Routes:
* Post /login for login,
* Post /register for signup,
* Post /sendmessage for sending messages
* Put /block/:username for bolckinf user
* Get /inbox for recived messages


## Data Format of Each Route
/login :
```
{
	"username":"argoyal1",
	"password":"hello"
}
```

/sendmessage :
```
{
  "messageHead": "hello",
  "to": "5adc9360762e78301c848ddb",
  "messageContent": "kick",
}
```
/register

```
{
    "username":"argoyal",
    "password":"hello",
    "firstName":"anshul",
    "lastName":"goyal",
}
```
