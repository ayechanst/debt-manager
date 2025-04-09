---
title: "Debt Tracker"
subtitle: "A dApp responsible for keeping track of debts amongst friends"
data: "2024-05-17"
---

This is a tool that I decided to build because at
the time of writting this I live in house with other people, and we share food, rental
equipment, and pay for each others things often. This makes debt management a priority.

Project link: [Debt Manager](https://debt-manager-nextjs-hwubl6giq-ayechanst.vercel.app/)

### Goals

1. Add different groups where debts are tracked separately
2. Add people to groups
3. Add transactions between people in groups
4. Display all debts in an easy to read manner

### Tools

Solidity, React, Next.js, TypeScript, Daisy UI, Scaffold-Eth 2.0, Hardhat

### How it works

Imagine Jim goes shopping at Costco so Sam can cook food for him, Joe, and
Dan. Jim would log his grocery recipe in the app and mark everyone as a beneficiary.

Jim spent 400 so everyone owes him 100. Joe goes on a beer and cigarette run the next
day, spends 75, and logs the purchase in the app.

Sam does not drink or smoke however
so she is not included in the list of beneficiaries. Now Joe owes Jim less than before,
Dan owes Jim and Joe now, and Sam owes Jim the same amount.

The idea is that debts get
shifted around instead of needing to be paid immediately.

### Graph data structure

My biggest problem was how I was going to store two types of data (people, and transactions)
in a way that would be easy to read from. While researching how to accomplish this I discovered
graphs. Graphs were straightforward but applying them to my project was difficult because
resources that explain graphs don't typically use Solidity as their langauge of choice for their
demonstration. I ended up using structs to represent my edges (transaction data) and nodes (people)
and storing the edges in a mapping.

### Adding groups

Having different groups is a feature I added mid-development because its a very nice
feature and I didn't originially think of it. This was a big challenge because I had already
designed my graph data structure to work for a singular group. I overcame this by storing
graphs in a mapping, and accessing the mapping through a key that is generated upon group
creation. The biggest problem was Solidity does not like storing structs that have structs
with arrays in them into a mapping. Retrieving data from the graphs was impossible, so I
stored my edges and nodes to my graph globally in mappings, and when retrieving data I used
keys to access specific group data depending on the kind of data the front end wanted.

### Adding transactions

The Solidity for this feature was not as hard as implementing the graph, but challenging
on the front end. I learned a lot about React in this project especially about props and
loading lists of checkboxes.
