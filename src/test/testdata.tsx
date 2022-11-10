export const customers = [
  {
    id: 1,
    name: "Chopin",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
  {
    id: 2,
    name: "Bach",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
  {
    id: 3,
    name: "Tchaikovsky",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
  {
    id: 4,
    name: "Beethoven",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
  {
    id: 5,
    name: "Zimmer",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
  {
    id: 6,
    name: "Paganini",
    email: "email@gmail.com",
    address: "kathmandu",
    meters: [123, 432, 211],
  },
];

export const fieldworkers = [
  { id: 1, name: "gogh", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 2, name: "monet", email: "gogh@gmail.com", customers: [4, 5] },
  { id: 3, name: "matisse", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 4, name: "rembrandt", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 5, name: "hiroshi", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 6, name: "raphael", email: "gogh@gmail.com", customers: [1, 2, 3] },
  {
    id: 7,
    name: "michaelangelo",
    email: "gogh@gmail.com",
    customers: [1, 2, 3],
  },
  { id: 8, name: "dali", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 9, name: "picasso", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 10, name: "hasui", email: "gogh@gmail.com", customers: [1, 2, 3] },
  { id: 10, name: "vinci", email: "gogh@gmail.com", customers: [1, 2, 3] },
];

export const meterTypes = [
  {id : 1, type : 'industrial', noOfReadings : '20', faultTolerance : 0, ratePerUnit : 203},
  {id : 2, type : 'residential', noOfReadings : '10', faultTolerance : 1, ratePerUnit : 104},
  {id : 3, type : 'commercial', noOfReadings : '30', faultTolerance : 0, ratePerUnit : 157},
]

export const bills = [
  {id : 1, customerId : 3, total : 300, paid : false, date : '1/9/2022'},
  {id : 2, customerId : 4, total : 600, paid : false, date : '3/10/2022'},
  {id : 3, customerId : 5, total : 4500, paid : false, date : '4/10/2022'},
  {id : 4, customerId : 1, total : 2000, paid : false, date : '7/11/2022'},
  {id : 5, customerId : 6, total : 100, paid : false, date : '7/11/2022'},
  {id : 6, customerId : 2, total : 150, paid : false, date : '5/12/2022'},
  {id : 7, customerId : 3, total : 250, paid : false, date : '6/12/2022'}
]
