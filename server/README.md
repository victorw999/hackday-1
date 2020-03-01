The IESD "Hello Taco" API manages a leaderboard.

The current status of this API includes a hard coded list of members and current balances, 
and two HTTP GET routes.  Here are some samples to illustrates these routes with some 
manual test cases:

Here are a few routes to show taco transfers (includes an 'out of tacos failure case'):

$ curl http://localhost:8080/api/give/@Duke/@Curtis
{"status":"success","message":"Success:\nMember @Duke give a taco to @Curtis!\n@Duke now has 2 tacos, \nand @Curtis now has 10 tacos."}
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)
$ curl http://localhost:8080/api/give/@Duke/@Curtis
{"status":"success","message":"Success:\nMember @Duke give a taco to @Curtis!\n@Duke now has 1 tacos, \nand @Curtis now has 11 tacos."}
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)
$ curl http://localhost:8080/api/give/@Duke/@Curtis
{"status":"success","message":"Success:\nMember @Duke give a taco to @Curtis!\n@Duke now has 0 tacos, \nand @Curtis now has 12 tacos."}
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)
$ curl http://localhost:8080/api/give/@Duke/@Curtis
{"status":"fail","message":"Member giving taco has no more tacos to give"}
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)

Here is a taco transfer route with an incorrect user parameter:

$ curl http://localhost:8080/api/give/@Duke/@Curti999
{"status":"fail","message":"Member receiving taco not found"}

Here is an example of the leaderboard route, before and after a taco transfer:

$ curl http://localhost:8080/api/leaderboard
[{"user":"@victor wong","received":4,"given":2,"redeemable":6},{"user":"@Curtis","received":4,"given":2,"redeemable":7},{"user":"@Andrew Wanex","received":4,"given":2,"redeemable":6},{"user":"@kamaren mccord","received":4,"given":2,"redeemable":6},{"user":"@Duke","received":4,"given":2,"redeemable":5},{"user":"@victor wong","received":4,"given":2,"redeemable":6}]
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)
$ curl http://localhost:8080/api/give/@Duke/@Curtis
{"status":"success","message":"Success:\nMember @Duke give a taco to @Curtis!\n@Duke now has 4 tacos, \nand @Curtis now has 8 tacos."}
dukel@BASEramp MINGW64 ~/Documents/Projects/hackday-1/server (server)
$ curl http://localhost:8080/api/leaderboard
[{"user":"@victor wong","received":4,"given":2,"redeemable":6},{"user":"@Curtis","received":4,"given":2,"redeemable":8},{"user":"@Andrew Wanex","received":4,"given":2,"redeemable":6},{"user":"@kamaren mccord","received":4,"given":2,"redeemable":6},{"user":"@Duke","received":4,"given":2,"redeemable":4},{"user":"@victor wong","received":4,"given":2,"redeemable":6}]

