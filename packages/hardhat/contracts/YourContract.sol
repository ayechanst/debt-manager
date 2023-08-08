//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {

	struct Person {
		string name;
		address id;
		string groupMemberOf;
	}

	struct Edge {
		string nameOfBuyer;
		string nameOfBeneficiary;
		string purchaseName;
		uint256 purchaseAmount;
		uint256 debtAmount;
	}

	struct Group {
		string groupName;
		address groupOwner;
		uint256 groupKey;
		string[] groupMembers;
	}

	// the graphs are stored in here
	mapping(uint256 => Edge) graph;
	// groupId => Group Struct
	mapping(uint256 => Group) groups;
	mapping(uint256 => Person) people;

	uint256[] groupKeys;
	uint256 currentKey = 0;
	uint256[] personKeys;
	uint256 currentPersonKey = 0;
	uint256[] edgeKeys;
	uint256 currentEdgeKey = 0;

	function createGroup(string memory groupName, address person) public {
		Group memory newGroup;
		uint256 freshKey = currentKey + 1;
		currentKey = freshKey;
		newGroup.groupName = groupName;
		newGroup.groupOwner = person;
		newGroup.groupKey = freshKey;
		groups[freshKey] = newGroup;
		groupKeys.push(freshKey);
	}

	function getGroups() public view returns (Group[] memory) {
		Group[] memory allGroups = new Group[](groupKeys.length);
		for (uint256 i = 0; i < groupKeys.length; i++) {
			allGroups[i] = groups[groupKeys[i]];
		}
		return allGroups;
	}

	function createPerson(string memory personName, string memory sentFrom) public {
		Person memory newPerson;
		uint256 freshKey = currentPersonKey + 1;
		currentPersonKey = freshKey;
		newPerson.name = personName;
		newPerson.groupMemberOf = sentFrom;
		newPerson.id = address(bytes20(keccak256(abi.encode(personName, block.number))));
		people[freshKey] = newPerson;
		personKeys.push(freshKey);
	}

	function createEdge(string memory nameOfBuyer, string memory nameOfBeneficiary, string memory purchaseName, uint256 purchaseAmount, uint256 debtAmount) public returns (Edge memory) {
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.nameOfBeneficiary = nameOfBeneficiary;
		newEdge.purchaseName = purchaseName;
		newEdge.purchaseAmount = purchaseAmount;
		newEdge.debtAmount = debtAmount;
		return newEdge;
	}


	function logPurchase(uint256 debtAmount, string memory nameOfBuyer, string memory purchaseName, string[] memory beneficiaries, string memory sentFrom) public {
		// add sent from
		uint256 numOfPeople = beneficiaries.length;
		require(numOfPeople > 0, "division by 0");
		uint256 dividedCost = debtAmount / numOfPeople;
		for (uint256 i = 0; i < numOfPeople; i++) {
			string memory beneficiary = beneficiaries[i];
			Edge memory newEdge = createEdge(nameOfBuyer, beneficiary, purchaseName, debtAmount, dividedCost);
			// this will push these edges to an array of edges specific to the key
			//graph[address] = newEdge;
			// edges.push(newEdge);
		}
	}

	function getPeople() public view returns (Person[] memory) {
		Person[] memory peopleArray = new Person[](personKeys.length);
		for (uint256 i = 0; i < personKeys.length; i++) {
			// running into problems here consult get groups
			peopleArray[i] = people[personKeys[i]];
		}
		return peopleArray;
	}

	// this will only return edges created by a group of people
	// function getDebts() public view returns (Edge[] memory) {
	// 	Edge[] memory accountEdges;
	// 	for (uint256 i = 0; i < edges.length; i++) {
	// 		if (edges[i].edgeId == msg.sender) {
	// 			// or also if msg.sender is part of the group
	// 			accountEdges[i] = edges[i];
	// 		}
	// 	}
	// 	return accountEdges;
	// }


}
