# RBCVentureAssignment
## Add endPoints in JsonFormat
Transactions:
```
[{"id":2, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 3},
{"id":3, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"NEUTRAL", "user_id": 3},
{"id":4, "merchant":"TimHortons", "amount":1.78, "date":"2018-01-01", "reflected":"BAD", "user_id": 3},
{"id":4, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"NEUTRAL", "user_id": 3},
{"id":1, "merchant":"TimHortons", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 1},
{"id":1, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 1},
{"id":2, "merchant":"starbucks", "amount":5.76, "date":"2018-01-02", "reflected":"GOOD", "user_id": 1},
{"id":3, "merchant":"TimHortons", "amount":8.76, "date":"2018-01-03", "reflected":"NEUTRAL", "user_id": 1},
{"id":4, "merchant":"TimHortons", "amount":5.67, "date":"2018-01-04", "reflected":"BAD", "user_id": 1},
{"id":5, "merchant":"TimHortons", "amount":11.76, "date":"2018-01-06", "reflected":"GOOD", "user_id": 1},
{"id":5, "merchant":"starbucks", "amount":12.36, "date":"2018-01-07", "reflected":"GOOD", "user_id": 2},
{"id":5, "merchant":"TimHortons", "amount":1.45, "date":"2018-01-08", "reflected":"GOOD", "user_id": 2},
{"id":2, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 3},
{"id":3, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"NEUTRAL", "user_id": 3},
{"id":4, "merchant":"TimHortons", "amount":1.78, "date":"2018-01-01", "reflected":"BAD", "user_id": 3},
{"id":4, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"NEUTRAL", "user_id": 3},
{"id":1, "merchant":"TimHortons", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 1},
{"id":1, "merchant":"starbucks", "amount":1.78, "date":"2018-01-01", "reflected":"GOOD", "user_id": 1},
{"id":2, "merchant":"starbucks", "amount":5.76, "date":"2018-01-02", "reflected":"GOOD", "user_id": 1},
{"id":3, "merchant":"TimHortons", "amount":8.76, "date":"2018-01-03", "reflected":"NEUTRAL", "user_id": 1},
{"id":4, "merchant":"TimHortons", "amount":5.67, "date":"2018-01-04", "reflected":"BAD", "user_id": 1},
{"id":5, "merchant":"TimHortons", "amount":11.76, "date":"2018-01-06", "reflected":"GOOD", "user_id": 1},
{"id":5, "merchant":"starbucks", "amount":12.36, "date":"2018-01-07", "reflected":"GOOD", "user_id": 2},
{"id":5, "merchant":"TimHortons", "amount":1.45, "date":"2018-01-08", "reflected":"GOOD", "user_id": 2}]
```
Users:
```
[{"id":3, "name": "Abhi"},{"id":1, "name": "John"},{"id":2, "name": "Luke"}]
```

## First endpoint: counts the transaction of a merchant.
  Only add `transactions` in the transaction input field and click the `Submit` button.
	Result field will show counts of transactions of a merchant.
	
## Second endpoint: percentage of happyness per user
  Add both `transactions` and `users` in the respective fields and click the `Submit`button.
	Result field will show  percentage of happyness per user.
